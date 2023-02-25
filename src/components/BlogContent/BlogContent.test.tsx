import { BlogContent } from "@components/BlogContent"
import { render, screen, within } from "@testing-library/react"
import { describe, expect, test } from "vitest"

describe("BlogContent", (): void => {
  test("renders the NoPosts component", (): void => {
    render(<BlogContent />)
    const noPosts = within(screen.getByRole("heading")).getByText(
      "Nenhum post encontrado."
    )

    expect(noPosts).toBeDefined()
  })
})
