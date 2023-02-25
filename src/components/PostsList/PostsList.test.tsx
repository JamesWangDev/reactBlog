import { PostsList } from "@components/PostsList"
import { render, screen, within } from "@testing-library/react"
import { mockPost } from "@utils/mocks"
import { describe, expect, test } from "vitest"

describe("PostsList", () => {
  test("should render the posts list", () => {
    render(<PostsList posts={[mockPost]} />)
    const postsList = within(screen.getByRole("list"))

    expect(postsList).toBeDefined()
  })
})
