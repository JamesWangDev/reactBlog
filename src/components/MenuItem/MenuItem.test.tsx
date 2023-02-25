import { MenuItem } from "@components/MenuItem"
import { render, screen, within } from "@testing-library/react"
import { describe, expect, test } from "vitest"

const mockNavLink = {
  name: "Test",
  path: "/test"
}

describe("MenuItem", (): void => {
  test("renders the menu item", (): void => {
    render(<MenuItem {...mockNavLink} />)
    const link = within(screen.getByRole("link")).getByText(mockNavLink.name)

    expect(link).toBeDefined()
  })
})
