import { navLinks } from "../../utils/navLinks"

import { ButtonToggleTheme } from "../ButtonToggleTheme"
import { Menu } from "../Menu"

export function Header(): JSX.Element {
  return (
    <header className="w-full h-12 flex flex-row flex-nowrap items-center justify-between px-8 md:px-32">
      <Menu links={navLinks} />
      <ButtonToggleTheme />
    </header>
  )
}
