import { MenuProps, NavLink } from "../../../@types/global"
import { MenuItem } from "../MenuItem"

export function Menu(props: MenuProps): JSX.Element {
  return (
    <nav className="w-64 flex flex-row justify-center items-center">
      {props.links.map((link: NavLink) => (
        <MenuItem key={link.name} name={link.name} path={link.path} />
      ))}
    </nav>
  )
}
