import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

import { PDFDocument } from 'pdf-lib'
import { chromium } from 'playwright-core'

const root = process.cwd()
const baseUrl = process.env.CV_BASE_URL ?? 'http://localhost:3000'
const config = JSON.parse(
  await readFile(path.join(root, 'src/i18n/locales.json'), 'utf8'),
)
const locales = config.locales
const outputDir = path.join(root, 'public/cv')

await mkdir(outputDir, { recursive: true })

const executablePath = process.env.CHROME_PATH
const browser = await chromium.launch({
  ...(executablePath ? { executablePath } : { channel: 'chrome' }),
  headless: true,
})

for (const locale of locales) {
  const url = `${baseUrl}/${locale.code}/${locale.cvPath}`
  const output = path.join(outputDir, locale.cvFile)

  const page = await browser.newPage({
    viewport: { width: 1200, height: 1600 },
    locale: locale.dateLocale,
  })

  await page.goto(url, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(400)

  const meta = await page.evaluate(() => ({
    title: document.title,
    description:
      document.querySelector('meta[name="description"]')?.getAttribute(
        'content',
      ) ?? '',
    keywords:
      document.querySelector('meta[name="keywords"]')?.getAttribute('content') ??
      '',
    lang: document.documentElement.lang,
  }))

  await page.pdf({
    path: output,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
  })
  await page.close()

  const pdf = await PDFDocument.load(await readFile(output))
  pdf.setTitle(meta.title)
  pdf.setAuthor('Luan Argolo Lemos')
  pdf.setSubject(meta.description)
  pdf.setKeywords(
    meta.keywords
      .split(',')
      .map((keyword) => keyword.trim())
      .filter(Boolean),
  )
  pdf.setLanguage(locale.dateLocale)
  pdf.setCreator('luanlemos.dev')
  pdf.setProducer('luanlemos.dev')

  await writeFile(output, await pdf.save())
  process.stdout.write(`PDF ${locale.code} gerado: ${output}\n`)
}

await browser.close()
