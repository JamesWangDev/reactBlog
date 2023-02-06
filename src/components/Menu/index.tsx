import { NavLink } from "../../utils/navLinks"
import { MenuItem } from "../MenuItem"

interface MenuProps {
  links: NavLink[]
}

export function Menu({ links }: MenuProps): JSX.Element {
  return (
    <nav className="w-64 flex flex-row justify-center items-center">
      {links.map(({ name, path }) => (
        <MenuItem key={name} name={name} path={path} />
      ))}
    </nav>
  )
}
