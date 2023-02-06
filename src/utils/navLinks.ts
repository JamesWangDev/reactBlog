export interface NavLink {
  name: string
  path: string
}

export const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  {
    name: "Sobre",
    path: "/sobre"
  },
  {
    name: "Projetos",
    path: "/projetos"
  },
  {
    name: "Blog",
    path: "/blog"
  }
]
