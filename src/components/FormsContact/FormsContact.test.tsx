import { FormContact } from "@components/FormsContact"
import { render, screen, within } from "@testing-library/react"
import { describe, expect, test } from "vitest"

describe("FormContact", (): void => {
  test("renders the form contact", (): void => {
    render(<FormContact />)
    const heading = within(screen.getByRole("heading", { level: 4 })).getByText(
      "Será um prazer conversar com você!"
    )
    const subheading = within(
      screen.getByText(
        "Preencha o formulário abaixo e entrarei em contato o mais breve."
      )
    )
    const form = screen.getByRole("form")
    const inputName = screen.getByLabelText("Nome:")
    const inputEmail = screen.getByLabelText("E-mail:")
    const inputMessage = screen.getByLabelText("Mensagem:")
    const button = screen.getByRole("button")

    expect(form).toBeDefined()
    expect(heading).toBeDefined()
    expect(subheading).toBeDefined()
    expect(inputName).toBeDefined()
    expect(inputEmail).toBeDefined()
    expect(inputMessage).toBeDefined()
    expect(button).toBeDefined()
  })
})
