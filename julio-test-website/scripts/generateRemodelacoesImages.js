// Small helper script to generate data/remodelacoesImages.ts
// Run with: node scripts/generateRemodelacoesImages.js

/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs")
const path = require("path")

const projectRoot = __dirname
const imagesDir = path.join(projectRoot, "public", "remodelacoes-fotos")
const outDir = path.join(projectRoot, "data")
const outFile = path.join(outDir, "remodelacoesImages.ts")

function humanizeFromFilename(filename) {
  const base = filename.replace(path.extname(filename), "")
  // Remove trailing unsplash-style id chunk if present
  const withoutId = base.replace(/-[a-z0-9]+$/i, "")
  const withSpaces = withoutId.replace(/[-_]+/g, " ")
  return withSpaces.replace(/\b\w/g, (c) => c.toUpperCase())
}

function main() {
  if (!fs.existsSync(imagesDir)) {
    console.error(`Images directory not found: ${imagesDir}`)
    process.exit(1)
  }

  const exts = new Set([".jpg", ".jpeg", ".png", ".webp"])

  const files = fs
    .readdirSync(imagesDir)
    .filter((file) => exts.has(path.extname(file).toLowerCase()))
    .sort()

  const items = files.map((file) => {
    const title = humanizeFromFilename(file)
    return {
      imgSrc: `remodelacoes-fotos/${file}`,
      title,
      description: title,
    }
  })

  fs.mkdirSync(outDir, { recursive: true })

  const tsContent = `export type RemodelacaoImage = {
  imgSrc: string
  title: string
  description: string
}

export const remodelacoesImages: RemodelacaoImage[] = ${JSON.stringify(
    items,
    null,
    2,
  )}\n`

  fs.writeFileSync(outFile, tsContent, "utf8")
  console.log(
    `Generated ${outFile} with ${items.length} image${
      items.length === 1 ? "" : "s"
    }.`,
  )
}

main()

