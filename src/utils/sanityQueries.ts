export const sanityQueries = {
  posts: `*[_type == 'post' && published == true] {
    title,
    subtitle,
    "slug": slug.current,
    "poster": mainImage.asset._ref,
    "attribution": mainImage.attribution,
    "categories": *[_type == 'category'].slug.current,
    "authorName": author -> name,
    "authorImage": author -> image.asset._ref,
    body,
    date,
    published
  }`,
  postBySlug: `*[_type == "post" && slug.current == $slug] {
    title,
    subtitle,
    "slug": slug.current,
    "poster": mainImage.asset._ref,
    "attribution": mainImage.attribution,
    "categories": *[_type == 'category'].slug.current,
    "authorName": author -> name,
    "authorImage": author -> image.asset._ref,
    body,
    date,
    published
  }`,
  slugs: `*[_type == "post"]{
    "slug": slug.current
  }`
}
