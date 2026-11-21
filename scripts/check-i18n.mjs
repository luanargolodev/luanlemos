import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const config = JSON.parse(
  await readFile(path.join(root, 'src/i18n/locales.json'), 'utf8'),
)
const flagsSource = await readFile(
  path.join(root, 'src/components/i18n/flags.tsx'),
  'utf8',
)

const errors = []
const seenCodes = new Set()
const seenPaths = new Set()

for (const locale of config.locales) {
  if (seenCodes.has(locale.code)) {
    errors.push(`Locale duplicado: ${locale.code}`)
  }
  seenCodes.add(locale.code)

  for (const field of [
    'code',
    'label',
    'shortLabel',
    'flag',
    'htmlLang',
    'ogLocale',
    'dateLocale',
    'cvPath',
    'cvFile',
    'routes',
  ]) {
    if (!locale[field]) errors.push(`${locale.code}: campo ${field} ausente`)
  }

  if (!flagsSource.includes(`'${locale.flag}'`)) {
    errors.push(`${locale.code}: bandeira "${locale.flag}" não existe em flags.tsx`)
  }

  if (seenPaths.has(locale.cvPath)) {
    errors.push(`Caminho de CV duplicado: ${locale.cvPath}`)
  }
  seenPaths.add(locale.cvPath)

  for (const file of [
    `src/i18n/messages/${locale.code}.ts`,
    `src/content/${locale.code}.ts`,
  ]) {
    try {
      await stat(path.join(root, file))
    } catch {
      errors.push(`${locale.code}: arquivo ausente ${file}`)
    }
  }

  for (const key of [
    'about',
    'experience',
    'projects',
    'project',
    'stack',
    'contact',
  ]) {
    if (!locale.routes[key]) {
      errors.push(`${locale.code}: rota ${key} ausente`)
    }
  }
}

const pt = await readFile(
  path.join(root, `src/i18n/messages/${config.defaultLocale}.ts`),
  'utf8',
)

for (const locale of config.locales) {
  const source = await readFile(
    path.join(root, `src/i18n/messages/${locale.code}.ts`),
    'utf8',
  )
  if (locale.code !== config.defaultLocale && !source.includes('Messages')) {
    errors.push(
      `${locale.code}: messages deve ser tipado como Messages para garantir paridade`,
    )
  }
}

if (errors.length > 0) {
  process.stderr.write(`${errors.join('\n')}\n`)
  process.exit(1)
}

process.stdout.write(
  `i18n ok: ${config.locales.length} idiomas (${config.locales
    .map((locale) => locale.code)
    .join(', ')}), ${pt.split('\n').length} linhas no dicionário base.\n`,
)
