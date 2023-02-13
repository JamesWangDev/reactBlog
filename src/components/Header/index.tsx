import { navLinks } from "../../utils/navLinks"
import { ButtonToggleTheme } from "../ButtonToggleTheme"
import { Menu } from "../Menu"

export function Header(): JSX.Element {
  return (
    <header className="box-border w-full h-12 flex flex-row flex-nowrap items-center justify-between px-2 md:px-32">
      <Menu links={navLinks} />
      <ButtonToggleTheme />
    </header>
  )
}
