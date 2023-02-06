import Image from "next/image"
import Link from "next/link"
import { RiArrowLeftUpLine } from "react-icons/ri"

export function NotFoundContent(): JSX.Element {
  return (
    <div className="flex flex-col items-start justify-center w-full h-full">
      <p className="text-black dark:text-white font-normal text-sm text-start md:text-base my-2 py-1">
        <Link
          href="/"
          className="flex flex-row items-center text-center no-underline hover:underline decoration-2 transition duration-300 ease-in-out text-black dark:text-white"
        >
          <RiArrowLeftUpLine className="mr-1" /> Voltar para a&nbsp;
          <strong>página inicial.</strong>
        </Link>
      </p>
      <Image
        src="https://media.giphy.com/media/JuFwy0zPzd6jC/giphy.gif"
        alt="404"
        width={500}
        height={500}
      />
    </div>
  )
}
