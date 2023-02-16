export type BodyChildren = {
  _key: string
  _type: string
  marks: string[]
  text: string
}

export type MarkDefsChildren = {
  _key: string
  _type: string
  href: string
}

export type Body = {
  _key: string
  _type: string
  children: BodyChildren[]
  markDefs: MarkDefsChildren[]
  style: string
}

export type FormattedPost = {
  authorName: string
  authorImage: string
  body: Body[]
  date: string
  slug: string
  title: string
  subtitle: string
  categories: string[]
  published: boolean
}

export type FormattedPosts = {
  formattedPosts: FormattedPost[]
}

export type BlogGetStaticPropsResponse = {
  props: FormattedPosts
}

export type BlogProps = {
  formattedPosts: FormattedPost[]
}

export type PostProps = {
  post: FormattedPost
}

export type NavLink = {
  name: string
  path: string
}

export type MenuProps = {
  links: NavLink[]
}

export type SectionContainerProps = {
  children: React.ReactNode
  title: string
  subtitle?: string
}

export type PostContainerProps = {
  children: React.ReactNode
}

export type PageLayoutProps = {
  children: React.ReactNode
}
