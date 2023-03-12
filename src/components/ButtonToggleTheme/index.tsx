import { Switch } from "@headlessui/react"
import { useTheme } from "next-themes"

export function ButtonToggleTheme(): JSX.Element {
  const { theme, setTheme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const spanIsDark = "md:translate-x-6 translate-x-4 bg-black"
  const spanIsWhite = "translate-x-1 bg-white"
  const styleSpan = currentTheme === "dark" ? spanIsDark : spanIsWhite

  function handleTheme(): void {
    if (currentTheme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="sr-only">Tema</Switch.Label>
        <Switch
          checked={currentTheme === theme}
          onChange={handleTheme}
          className="relative inline-flex h-4 w-8 md:h-6 md:w-11 items-center rounded-full transition-colors ease-in-out duration-200 bg-gray-600 dark:bg-gray-400"
        >
          <span
            className={`inline-block h-3 w-3 md:h-4 md:w-4 transform rounded-full transition ${styleSpan}`}
          />
        </Switch>
      </div>
    </Switch.Group>
  )
}
