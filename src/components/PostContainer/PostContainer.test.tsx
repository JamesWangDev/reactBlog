import { PostContainer } from "@components/PostContainer"
import { render, screen, within } from "@testing-library/react"
import { mockPost } from "@utils/mocks"
import { describe, expect, test } from "vitest"

describe("PostContainer", (): void => {
  test("renders the post container", (): void => {
    render(<PostContainer post={mockPost} />)

    const title = within(screen.getByRole("heading", { level: 1 })).getByText(
      mockPost.title
    )
    const body = within(screen.getByText(mockPost.body[0].children[0].text))

    expect(title).toBeDefined()
    expect(body).toBeDefined()
  })
})
