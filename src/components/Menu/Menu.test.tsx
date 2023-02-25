import { Menu } from "@components/Menu"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

const mockLinks = [
  {
    name: "Test",
    path: "/test"
  },
  {
    name: "Another Test",
    path: "/another-test"
  }
]

describe("Menu", (): void => {
  test("renders the menu", (): void => {
    render(<Menu links={mockLinks} />)
    const menu = screen.getByRole("navigation")

    expect(menu).toBeDefined()
  })
})
