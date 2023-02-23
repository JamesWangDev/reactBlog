import { Loading } from "@components/Loading"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

describe("Loading", (): void => {
  test("renders the loading", (): void => {
    render(<Loading />)
    const loading = screen.getByText("Carregando...")

    expect(loading).toBeDefined()
  })
})
