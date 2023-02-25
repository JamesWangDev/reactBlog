import { MenuItem } from "@components/MenuItem"
import type { MenuProps, NavLink } from "@types"

export function Menu(props: MenuProps): JSX.Element {
  return (
    <nav className="w-64 flex flex-row justify-center items-center">
      {props.links.map((link: NavLink) => (
        <MenuItem key={link.name} name={link.name} path={link.path} />
      ))}
    </nav>
  )
}
