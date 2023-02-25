import { NotFoundContent } from "@components/NotFoundContent"
import { render, screen, within } from "@testing-library/react"
import { describe, expect, test } from "vitest"

describe("NotFoundContent", () => {
  test("should render the not found content", () => {
    render(<NotFoundContent />)
    const image = within(screen.getByRole("img"))
    const notFoundContent = within(screen.getByRole("link"))

    expect(image).toBeDefined()
    expect(notFoundContent).toBeDefined()
  })
})
