import { HomeContent } from "@components/HomeContent"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

describe("HomeContent", (): void => {
  test("renders the home content", (): void => {
    render(<HomeContent />)
    const paragraph = screen.getByText(
      "Bem-vindo ao meu lugar na internet. Eu construo coisas para a web."
    )

    expect(paragraph).toBeDefined()
  })
})
