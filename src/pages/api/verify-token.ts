import type { NextApiRequest, NextApiResponse } from "next"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY as string
    const { value } = JSON.parse(req.body)
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${value}`
    const response = await fetch(url, { method: "POST" })
    const validation = await response.json()
    res.status(200).json(validation)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json(error.message)
    }
  }
}
