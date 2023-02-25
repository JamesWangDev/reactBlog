import { AboutContent } from "@components/AboutContent"
import { render, screen, within } from "@testing-library/react"
import { describe, expect, test } from "vitest"

describe("AboutContent", () => {
  test("renders", () => {
    render(<AboutContent />)

    const image = within(screen.getByRole("img", { name: /profile/i }))
    const title = within(screen.getByRole("heading", { level: 3 }))
    const job = within(screen.getByLabelText(/job/i))
    const location = within(screen.getByLabelText(/location/i))
    const about = within(screen.getByLabelText(/about/i))

    expect(image).toBeDefined()
    expect(title).toBeDefined()
    expect(job).toBeDefined()
    expect(location).toBeDefined()
    expect(about).toBeDefined()
  })
})
