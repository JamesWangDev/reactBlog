import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function SocialContent(): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-between w-auto h-full">
      <Link
        href="https://linkedin.com/in/pauloruan/"
        target="_blank"
        aria-label="LinkedIn Profile"
        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition duration-300 ease-in-out"
      >
        <FaLinkedin className="text-lg mr-1 md:text-2xl md:mr-2" />
      </Link>
      <Link
        href="https://github.com/pauloruan/"
        target="_blank"
        aria-label="GitHub Profile"
        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition duration-300 ease-in-out"
      >
        <FaGithub className="text-lg ml-1 md:text-2xl md:ml-2" />
      </Link>
    </div>
  )
}
