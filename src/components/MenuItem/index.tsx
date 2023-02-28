import type { NavLink } from "@types"
import Link from "next/link"
import { useRouter } from "next/router"

export function MenuItem(props: NavLink): JSX.Element {
  const general = "text-gray-600 dark:text-gray-400 font-medium"
  const active = "text-black dark:text-white font-bold"
  const router = useRouter()
  const pathname = `/${router.pathname.split("/")[1]}`
  const style = pathname === props.path ? active : general

  return (
    <Link
      aria-label={props.name}
      href={props.path}
      target="_self"
      className={`h-8 w-16 no-underline text-sm md:text-base cursor-pointer p-1 mx-1 rounded-sm flex items-center justify-center transition duration-300 ease-in-out ${style}`}
    >
      {props.name}
    </Link>
  )
}
