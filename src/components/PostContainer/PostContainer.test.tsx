import { PostContainer } from "@components/PostContainer"
import { render, screen, within } from "@testing-library/react"
import { describe, expect, test } from "vitest"

const mockPost = {
  authorImage: "image-1f9dbf48cec378caa3c23908cf797a86e8422e00-460x460-jpg",
  authorName: "Paulo Ruan",
  body: [
    {
      _key: "a23c04be1dc2",
      _type: "block",
      children: [
        {
          _key: "c82a8f18c7a10",
          _type: "span",
          marks: [],
          text: "texto de teste"
        }
      ],
      markDefs: [],
      style: "normal"
    }
  ],
  categories: ["categoria-teste"],
  date: "2023-02-08",
  published: true,
  slug: "meu-primeiro-teste",
  subtitle: "testando o post container",
  title: "Meu Primeiro Teste"
}

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
