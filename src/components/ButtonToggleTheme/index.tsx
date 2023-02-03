import { useTheme } from "next-themes"
import { MdDarkMode, MdLightMode } from "react-icons/md"

export function ButtonToggleTheme(): JSX.Element {
  const { theme, setTheme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  function handleTheme(): void {
    if (currentTheme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <button
      type="button"
      onClick={() => handleTheme()}
      className="h-8 w-8 no-underline flex items-center justify-center cursor-pointer p-1 mx-1"
    >
      {currentTheme === "dark" ? (
        <MdLightMode
          className="text-gray-600 font-semibold hover:text-white transition duration-300 ease-in-out"
          size={48}
        />
      ) : (
        <MdDarkMode
          className="text-gray-400 font-semibold hover:text-black transition duration-300 ease-in-out"
          size={48}
        />
      )}
    </button>
  )
}
