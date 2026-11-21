import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

import sharp from 'sharp'

const root = process.cwd()
const projectSource = path.join(root, 'assets/project-images')
const projectOutput = path.join(root, 'public/images/projects')
const profileSource = path.join(root, 'assets/profile/avatar-source.png')
const profileOutput = path.join(root, 'public/images/profile/avatar.webp')
const blurFile = path.join(root, 'src/data/image-blur.json')

await mkdir(projectOutput, { recursive: true })

const projectSlugs = [
  'zeedog',
  'zeenow',
  'blog',
  'zeedog-jp',
  'zeedog-eu',
  'zeedog-au',
  'zeedog-pe',
]

const blurData = {}

for (const slug of projectSlugs) {
  const input = path.join(projectSource, `${slug}.png`)
  const output = path.join(projectOutput, `${slug}.webp`)

  await sharp(input)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(output)

  const preview = await sharp(input)
    .resize({ width: 24 })
    .webp({ quality: 40 })
    .toBuffer()

  blurData[slug] = `data:image/webp;base64,${preview.toString('base64')}`
}

await writeFile(blurFile, `${JSON.stringify(blurData, null, 2)}\n`)

await sharp(profileSource)
  .resize({ width: 460, height: 460, fit: 'cover' })
  .webp({ quality: 88 })
  .toFile(profileOutput)
