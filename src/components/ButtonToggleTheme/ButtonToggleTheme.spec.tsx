import { ButtonToggleTheme } from "@components/ButtonToggleTheme"
import { render, screen, within } from "@testing-library/react"
import { describe, expect, test } from "vitest"

describe("ButtonToggleTheme", (): void => {
  test("renders the button", (): void => {
    render(<ButtonToggleTheme />)
    const button = within(screen.getByLabelText("Tema"))

    expect(button).toBeDefined()
  })
})
