import emailjs from "@emailjs/browser"
import type { FormContactProps } from "@types"

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string

export async function sendEmail(data: FormContactProps) {
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
