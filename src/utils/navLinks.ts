export interface NavLink {
  name: string
  path: string
}

export const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Projects",
    path: "/projects"
  },
  {
    name: "Blog",
    path: "/blog"
  }
]
