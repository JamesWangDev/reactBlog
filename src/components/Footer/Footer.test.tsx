import { Footer } from "@components/Footer"
import { render, screen, within } from "@testing-library/react"
import { describe, expect, test } from "vitest"

describe("Footer", (): void => {
  test("renders the footer", (): void => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    const footer = screen.getByRole("contentinfo")
    const paragraph = within(footer).getByText(`© ${currentYear} • Paulo Ruan`)

    expect(footer).toBeDefined()
    expect(paragraph).toBeDefined()
  })
})
