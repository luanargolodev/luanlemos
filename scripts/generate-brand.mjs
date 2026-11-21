import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

import sharp from 'sharp'

const cream = '#F6F3EC'
const soft = '#C7D2FE'
const indigo = '#4F46E5'

const mark = `
  <path d="M17 14v31h28" stroke="${cream}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M28 21l13 9-13 9" stroke="${soft}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
`

const tileSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" rx="16" fill="${indigo}"/>
  <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="15.25" stroke="#FFFFFF" stroke-opacity="0.16" stroke-width="1.5"/>
  ${mark}
</svg>`

const markOnlySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">${mark}</svg>`

const fullBleedSvg = (size) => {
  const scale = (size * 0.78) / 64
  const offset = (size - 64 * scale) / 2
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <rect width="${size}" height="${size}" fill="${indigo}"/>
    <g transform="translate(${offset}, ${offset}) scale(${scale})">${mark}</g>
  </svg>`
}

await mkdir('src/app', { recursive: true })
await mkdir('public', { recursive: true })
await mkdir('src/assets', { recursive: true })

await writeFile('src/app/icon.svg', tileSvg)
await writeFile('public/favicon.svg', tileSvg)
await writeFile('public/logo.svg', tileSvg)

for (const [size, output] of [
  [180, 'src/app/apple-icon.png'],
  [512, 'public/icon-512.png'],
]) {
  await sharp(Buffer.from(fullBleedSvg(size))).png().toFile(path.join(output))
}

await sharp(Buffer.from(markOnlySvg))
  .resize(128, 128)
  .png()
  .toFile('src/assets/logo-mark.png')

process.stdout.write('Brand assets generated.\n')
