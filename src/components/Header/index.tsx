import { ButtonToggleTheme } from "@components/ButtonToggleTheme"
import { Menu } from "@components/Menu"
import { navLinks } from "@utils/navLinks"

export function Header(): JSX.Element {
  return (
    <header className="w-full h-12 flex flex-row flex-nowrap items-center justify-between px-8 md:px-32">
      <Menu links={navLinks} />
      <ButtonToggleTheme />
    </header>
  )
}
