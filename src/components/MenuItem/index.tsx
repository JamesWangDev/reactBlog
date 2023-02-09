import Link from "next/link"
import { NavLink } from "../../../@types/global"

export function MenuItem(props: NavLink): JSX.Element {
  return (
    <Link
      href={props.path}
      target="_self"
      className="h-8 w-16 no-underline text-sm font-medium cursor-pointer p-1 mx-1 rounded-lg flex items-center justify-center transition duration-300 ease-in-out text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
    >
      {props.name}
    </Link>
  )
}
