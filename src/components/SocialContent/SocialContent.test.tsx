import { SocialContent } from "@components/SocialContent"
import { render, screen, within } from "@testing-library/react"
import { describe, expect, test } from "vitest"

describe("SocialContent", (): void => {
  test("renders the social content", (): void => {
    render(<SocialContent />)
    const links = screen.getAllByRole("link")
    const linkedin = within(links[0])
    const github = within(links[1])

    expect(links).toHaveLength(2)
    expect(linkedin).toBeDefined()
    expect(github).toBeDefined()
  })
})
