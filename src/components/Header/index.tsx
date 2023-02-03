import { navLinks } from "../../utils/navLinks"
import { ButtonToggleTheme } from "../ButtonToggleTheme"
import { Menu } from "../Menu"

export function Header(): JSX.Element {
  return (
    <header className="w-full h-12 flex items-center justify-between">
      <Menu links={navLinks} />
      <ButtonToggleTheme />
    </header>
  )
}
