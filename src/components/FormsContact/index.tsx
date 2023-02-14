import * as React from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from "react-hook-form"
import { RiSendPlaneFill } from "react-icons/ri"
import emailjs from "@emailjs/browser"

type FormContactProps = {
  name: string
  email: string
  message: string
}

export function FormContact(): JSX.Element {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string
  const [recaptchaFailed, setRecaptchaFailed] = React.useState(false)
  const [formSubmitted, setFormSubmitted] = React.useState(false)
  const [sendingForm, setSendingForm] = React.useState(false)
  const recaptchaRef = React.useRef<ReCAPTCHA>(null)
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isDirty, isValid }
  } = useForm<FormContactProps>()

  function sendEmail(data: FormContactProps) {
    const templateParams = {
      from_name: data.name,
      email: data.email,
      message: data.message
    }
    try {
      emailjs.send(serviceId, templateId, templateParams, publicKey)
      console.log("SUCCESS!")
      return true
    } catch (error) {
      console.log("FAILED...", error)
      return false
    }
  }

  function handleForm(data: FormContactProps) {
    setSendingForm(true)
    const sendResult = sendEmail(data)
    if (sendResult) {
      resetField("email")
      resetField("name")
      resetField("message")
      setFormSubmitted(true)
    } else {
      setRecaptchaFailed(true)
      recaptchaRef.current?.reset()
    }
  }

  if (formSubmitted) {
    return (
      <div className="w-full py-1 md:py-4 px-2 md:px-32 flex flex-col items-center justify-center text-center">
        <p className="text-lg text-black dark:text-white py-2 my-2">
          Sua mensagem foi enviada com sucesso! Em breve entrarei em contato.
        </p>
      </div>
    )
  }

  return (
    <div className="w-full py-1 md:py-4 px-2 md:px-32 flex flex-col items-center justify-center">
      <h4 className="text-2xl font-bold text-black dark:text-white py-1 my-1">
        Fale comigo
      </h4>
      <form
        onSubmit={handleSubmit(handleForm)}
        className="items-start w-full justify-center flex flex-col space-y-4"
      >
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="name">Seu nome:</label>
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
        <div className="flex flex-col space-y-2 w-full ">
          <label htmlFor="email">Seu e-mail:</label>
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
          <label htmlFor="message">Sua mensagem:</label>
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
          <ReCAPTCHA
            sitekey={siteKey}
            ref={recaptchaRef}
            onChange={() => setRecaptchaFailed(false)}
            style={{
              margin: "12px 0",
              boxShadow: recaptchaFailed ? "0 0 20px -5px red" : "none",
              width: "fit-content"
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!isDirty || !isValid || sendingForm}
          className="bg-black text-white dark:bg-white dark:text-black rounded-sm p-2 cursor-pointer transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RiSendPlaneFill className="inline-block mr-2" />
          {sendingForm ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  )
}
