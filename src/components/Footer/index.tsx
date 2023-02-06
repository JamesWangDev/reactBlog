import { SocialContent } from "../SocialContent"

export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="w-full h-12 flex flex-row flex-nowrap items-center justify-between text-center px-8 md:px-32 font-sans">
      <p className="text-gray-600 dark:text-gray-400 font-sans font-normal text-sm justify-center text-center md:text-base">
        {currentYear} | by Paulo Ruan
      </p>
      <SocialContent />
    </footer>
  )
}
