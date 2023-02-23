import { Header } from "@components/Header"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

describe("Header", (): void => {
  test("renders the header", (): void => {
    render(<Header />)
    const menu = screen.getByRole("navigation")
    const button = screen.getByRole("button")

    expect(menu).toBeDefined()
    expect(button).toBeDefined()
  })
})
