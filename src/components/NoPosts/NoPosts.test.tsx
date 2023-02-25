import { NoPosts } from "@components/NoPosts"
import { render, screen, within } from "@testing-library/react"
import { describe, expect, test } from "vitest"

describe("NoPosts", (): void => {
  test("renders the no posts message", (): void => {
    render(<NoPosts />)
    const message = within(screen.getByRole("heading")).getByText(
      "Nenhum post encontrado."
    )

    expect(message).toBeDefined()
  })
})
