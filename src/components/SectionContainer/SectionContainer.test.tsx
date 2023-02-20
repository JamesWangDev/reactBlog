import { SectionContainer } from "@components/SectionContainer"
import { render, screen, within } from "@testing-library/react"
import { describe, expect, test } from "vitest"

describe("SectionContainer", (): void => {
  test("renders the section container", (): void => {
    render(
      <SectionContainer title="Title Test" subtitle="Subtitle Test">
        <p>Text Test</p>
      </SectionContainer>
    )
    const heading = within(screen.getByRole("heading", { level: 1 })).getByText(
      "Title Test"
    )
    const subheading = within(
      screen.getByRole("heading", { level: 2 })
    ).getByText("Subtitle Test")
    const paragraph = screen.getByText("Text Test")

    expect(heading).toBeDefined()
    expect(subheading).toBeDefined()
    expect(paragraph).toBeDefined()
  })
})
