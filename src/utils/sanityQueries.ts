export const sanityQueries = {
  posts: `*[_type == 'post' && published == true] {
    date,
    title,
    subtitle,
    "slug": slug.current,
    "categories": *[_type == 'category'].slug.current,
    "authorName": author -> name,
    "authorImage": author -> image.asset._ref,
    body,
    published
  }`,
  postBySlug: `*[_type == "post" && slug.current == $slug] {
    date,
    title,
    subtitle,
    "slug": slug.current,
    "categories": *[_type == 'category'].slug.current,
    "authorName": author -> name,
    "authorImage": author -> image.asset._ref,
    body,
    published
  }`,
  slugs: `*[_type == "post"]{
    "slug": slug.current
  }`
}
