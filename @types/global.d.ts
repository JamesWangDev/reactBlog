export type Post = {
  date: string
  slug: { current: string }
  author: { _ref: string }
  title: string
  content: Content[]
}

export type Author = {
  _id: string
  name: string
  image: { _type: string; asset: { _ref: string } }
}

export type Children = {
  _key: string
  _type: string
  marks: []
  text: string
}

export type Content = {
  _key: string
  _type: string
  children: Children[]
}

export type FormattedPost = {
  authorName: string
  authorImage: string
  body: []
  date: string
  slug: string
  title: string
  description: string
  poster: string
  attribution: string
  tags: string[]
}

export type FormattedPosts = {
  formattedPosts: FormattedPost[]
}

export type BlogGetStaticPropsResponse = {
  props: FormattedPosts
}

export type BlogProps = {
  formattedPosts: Types.FormattedPost[]
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
