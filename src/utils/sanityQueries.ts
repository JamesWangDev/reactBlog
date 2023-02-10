export const sanityQueries = {
  posts: `*[_type == 'post'] {
    title,
    subtitle,
    "slug": slug.current,
    "poster": mainImage.asset._ref,
    "attribution": mainImage.attribution,
    "categories": *[_type == 'category'].category,
    "authorName": author -> name,
    "authorImage": author -> image.asset._ref,
    body,
    date
  } | order(_createdAt desc)`,
  postBySlug: `*[_type == "post" && slug.current == $slug] {
    title,
    subtitle,
    "slug": slug.current,
    "poster": mainImage.asset._ref,
    "attribution": mainImage.attribution,
    "categories": *[_type == 'category'].category,
    "authorName": author -> name,
    "authorImage": author -> image.asset._ref,
    body,
    date
  }`,
  slugs: `*[_type == "post"]{
    "slug": slug.current
  }`
}
