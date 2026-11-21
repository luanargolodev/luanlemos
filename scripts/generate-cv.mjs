import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

import { PDFDocument } from 'pdf-lib'
import { chromium } from 'playwright-core'

const cvUrl = process.env.CV_URL ?? 'http://localhost:3000/curriculo'
const output = path.join(
  process.cwd(),
  'public/cv/luan-argolo-lemos-desenvolvedor-front-end.pdf',
)

await mkdir(path.dirname(output), { recursive: true })

const executablePath = process.env.CHROME_PATH
const browser = await chromium.launch({
  ...(executablePath ? { executablePath } : { channel: 'chrome' }),
  headless: true,
})

const page = await browser.newPage({
  viewport: { width: 1200, height: 1600 },
  locale: 'pt-BR',
})

await page.goto(cvUrl, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)
await page.waitForTimeout(400)

await page.pdf({
  path: output,
  format: 'A4',
  printBackground: true,
  preferCSSPageSize: true,
})

await browser.close()

const pdf = await PDFDocument.load(await readFile(output))
pdf.setTitle(
  'Currículo — Luan Argolo Lemos — Desenvolvedor Front-end Pleno',
)
pdf.setAuthor('Luan Argolo Lemos')
pdf.setSubject(
  'Currículo de Luan Argolo Lemos, Desenvolvedor Front-end Pleno',
)
pdf.setKeywords([
  'desenvolvedor front-end',
  'desenvolvedor front-end pleno',
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Preact',
  'Tailwind CSS',
  'Deco.cx',
  'VTEX',
  'Shopify',
  'Liquid',
  'Deno',
  'e-commerce',
])
pdf.setCreator('luanlemos.dev')
pdf.setProducer('luanlemos.dev')

await writeFile(output, await pdf.save())

process.stdout.write(`PDF gerado: ${output}\n`)
