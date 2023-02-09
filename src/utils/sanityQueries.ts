export const sanityQueries = {
  posts: `*[_type == 'post'] {
    title,
    "slug": slug.current,
    "poster": mainImage.asset._ref,
    "tags": *[_type == 'tags'].slug.current,
    description,
    "authorName": author -> authorName,
    "authorImage": author -> authorImage.asset._ref,
    "body": content,
    date
  } | order(_createdAt desc)`,
  postBySlug: `*[_type == "post" && slug.current == $slug] {
    title,
    "slug": slug.current,
    "poster": mainImage.asset._ref,
    "tags": *[_type == 'tags'].slug.current,
    description,
    "authorName": author -> authorName,
    "authorImage": author -> authorImage.asset._ref,
    "body": content,
    date
  }`,
  slugs: `*[_type == "post"]{
    "slug": slug.current
  }`
}
