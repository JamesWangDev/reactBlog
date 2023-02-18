import { NoPosts } from "@components/NoPosts"
import { PostsList } from "@components/PostsList"
import { SearchPost } from "@components/SearchPost"
import { GlobalContext } from "@contexts/GlobalContext"
import { FormattedPost } from "@types"
import * as React from "react"

export function BlogContent(): JSX.Element {
  const { posts, searchValue } = React.useContext(GlobalContext)
  const allPosts = posts
  const filteredPosts = searchValue
    ? allPosts.filter((post: FormattedPost) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
    : posts

  return (
    <div className="w-full flex flex-col justify-between items-start min-h-[280px]">
      <SearchPost />
      {filteredPosts.length === 0 && <NoPosts />}
      {filteredPosts.length > 0 && <PostsList posts={filteredPosts} />}
    </div>
  )
}
