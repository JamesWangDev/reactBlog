import { render, screen, within } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import Home from "../src/pages"

describe("Home", (): void => {
  test("renders the home page", (): void => {
    render(<Home />)
    const heading = within(screen.getByRole("heading", { level: 1 })).getByText(
      "Paulo Ruan"
    )
    const subheading = within(
      screen.getByRole("heading", { level: 2 })
    ).getByText("Full Stack Developer and Software Engineering Student")

    expect(heading).toBeDefined()
    expect(subheading).toBeDefined()
  })
})
