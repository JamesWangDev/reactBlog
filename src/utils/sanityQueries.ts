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
  postSlugs: `*[_type == "post"]{
    "slug": slug.current
  }`,
  projects: `*[_type == 'project'] {
    name,
    description,
    "slug": slug.current,
    repository,
    website,
    "poster": poster.asset._ref,
    images,
    "technologies": technologies[] -> slug.current
  }`,
  projectBySlug: `*[_type == "project" && slug.current == $slug] {
    name,
    description,
    "slug": slug.current,
    repository,
    website,
    "poster": poster.asset._ref,
    images,
    "technologies": technologies[] -> slug.current
  }`,
  projectSlug: `*[_type == "project"]{
    "slug": slug.current
  }`
}
