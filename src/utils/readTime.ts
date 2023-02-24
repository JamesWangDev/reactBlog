import type { Body } from "@types"

export function countWords(blocks: Body[]): number[][] {
  const words = blocks.map((block) => {
    return block.children.map((child) => {
      return child.text.split(" ").length
    })
  })
  return words
}

export function readingTime(blocks: Body[]): string {
  const words = countWords(blocks)
  const wordsPerMinute = 225
  const totalWords = words.flat().reduce((acc, curr) => acc + curr)
  const readingTime = Math.ceil(totalWords / wordsPerMinute)
  return `${readingTime} min de leitura`
}
