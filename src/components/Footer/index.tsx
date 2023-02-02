import Link from "next/link"

export function Footer(): JSX.Element {
  return (
    <footer className="w-full h-12 flex items-center justify-center">
      <p className="text-white font-normal text-sm justify-center text-center md:text-base">
        Built with Next.js, Tailwind and &#10084;&#65039; by&nbsp;
        <Link
          href="https://github.com/pauloruan"
          target="_blank"
          className="no-underline hover:underline decoration-white decoration-2"
        >
          Paulo Ruan
        </Link>
        .
      </p>
    </footer>
  )
}
