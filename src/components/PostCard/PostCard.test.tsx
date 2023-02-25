import { PostCard } from "@components/PostCard"
import { render, screen, within } from "@testing-library/react"
import { mockPost } from "@utils/mocks"
import { describe, expect, test } from "vitest"

describe("PostCard", (): void => {
  test("renders the post card", (): void => {
    render(<PostCard {...mockPost} />)

    const title = within(screen.getByRole("heading", { level: 5 })).getByText(
      mockPost.title
    )
    const date = within(screen.getByText(mockPost.date)).getByText(
      mockPost.date
    )

    expect(title).toBeDefined()
    expect(date).toBeDefined()
  })
})
