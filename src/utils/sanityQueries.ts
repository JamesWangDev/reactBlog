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
  postSlug: `*[_type == "post"]{
    "slug": slug.current
  }`,
  projects: `*[_type == 'project'] {
    name,
    description,
    "slug": slug.current,
    repository,
    website,
    "image": image.asset._ref,
    "technologies": technologies[] -> name
  }`,
  projectBySlug: `*[_type == "project" && slug.current == $slug] {
    name,
    description,
    "slug": slug.current,
    repository,
    website,
    "image": image.asset._ref,
    "technologies": technologies[] -> name
  }`
}
