import type { FormContactProps } from "@types"
import { sendEmail } from "@utils/sendEmail"
import * as React from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from "react-hook-form"
import { RiSendPlaneFill } from "react-icons/ri"

export function FormContact(): JSX.Element {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string
  const [recaptchaSubmitted, setRecaptchaSubmitted] = React.useState(false)
  const [formSubmitted, setFormSubmitted] = React.useState(false)
  const [sendingForm, setSendingForm] = React.useState(false)
  const recaptchaRef = React.useRef<ReCAPTCHA>(null)
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isDirty, isValid }
  } = useForm<FormContactProps>()

  function resetFormFields() {
    resetField("email")
    resetField("name")
    resetField("message")
  }

  async function recaptchaValidation() {
    const token = recaptchaRef.current?.getValue()
    const response = await fetch("/api/verify-token", {
      method: "POST",
      body: JSON.stringify({ value: token })
    })
    const validation = await response.json()
    if (validation.success) {
      console.log(validation.success)
      return token
    } else throw new Error("ReCAPTCHA precisa ser resolvido")
  }

  async function handleForm(data: FormContactProps) {
    try {
      setSendingForm(true)
      await recaptchaValidation()
      await sendEmail(data)
      resetFormFields()
      setFormSubmitted(true)
    } catch (error) {
      setSendingForm(false)
      setFormSubmitted(false)
      if (
        error instanceof Error &&
        error.message === "ReCAPTCHA precisa ser resolvido"
      ) {
        alert(error.message)
      }
      alert(
        "Erro ao enviar formulário. Tente recarregar a página e tentar novamente."
      )
    }
  }

  if (formSubmitted) {
    return (
      <div className="w-full py-1 md:py-4 px-2 md:px-32 flex flex-col items-center justify-center text-center">
        <p className="text-lg text-black dark:text-white py-2 my-2">
          Sua mensagem foi enviada com sucesso!
          <br />
          Em breve entrarei em contato.
        </p>
      </div>
    )
  }

  return (
    <div className="w-full py-1 md:py-4 px-2 md:px-16 flex flex-col items-center justify-center">
      <div className="w-full py-1 my-1">
        <h4 className="text-2xl font-bold text-black dark:text-white">
          Será um prazer conversar com você!
        </h4>
        <p className="text-gray-600 dark:text-gray-400">
          Preencha o formulário abaixo e entrarei em contato o mais breve.
        </p>
      </div>
      <form
        aria-label="form"
        onSubmit={handleSubmit(handleForm)}
        className="items-start w-full justify-center flex flex-col space-y-4 mt-4"
      >
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="rounded-sm p-2 focus:outline-none"
          />
          {errors.name && (
            <span className="text-red-500">Nome é obrigatório</span>
          )}
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="rounded-sm p-2 focus:outline-none"
          />
          {errors.email && (
            <span className="text-red-500">E-mail é obrigatório</span>
          )}
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            rows={4}
            cols={30}
            {...register("message", { required: true })}
            className="rounded-sm p-2 focus:outline-none resize-none"
          />
          {errors.message && (
            <span className="text-red-500">Mensagem é obrigatória</span>
          )}
        </div>
        <div className="flex flex-col space-y-2 w-full">
          {isDirty && (
            <ReCAPTCHA
              sitekey={siteKey}
              ref={recaptchaRef}
              onChange={() => setRecaptchaSubmitted(true)}
            />
          )}
        </div>
        <button
          type="submit"
          disabled={!isDirty || !isValid || !recaptchaSubmitted}
          className="bg-black text-white dark:bg-white dark:text-black rounded-sm p-2 cursor-pointer transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RiSendPlaneFill className="inline-block mr-2" />
          {sendingForm ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  )
}
