import Link from "next/link"

export function Footer(): JSX.Element {
  return (
    <footer className="w-full h-12 flex items-center justify-center">
      <p className="text-gray-600 dark:text-gray-400 font-normal text-sm justify-center text-center md:text-base ">
        Built with Next.js and &#10084;&#65039; by&nbsp;
        <Link
          href="https://github.com/pauloruan"
          target="_blank"
          className="no-underline hover:underline decoration-white decoration-2 transition duration-300 ease-in-out text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
        >
          Paulo Ruan
        </Link>
        .
      </p>
    </footer>
  )
}
