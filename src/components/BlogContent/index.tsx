import * as React from "react"
import { FormattedPost } from "../../../@types/global"
import { GlobalContext } from "../../contexts/GlobalContext"
import { NoPosts } from "../NoPosts"
import { PostCard } from "../PostCard"
import { SearchPost } from "../SearchPost"

export function BlogContent(): JSX.Element {
  const { posts, searchValue } = React.useContext(GlobalContext)
  const allPosts = posts
  const filteredPosts = searchValue
    ? allPosts.filter((post: FormattedPost) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
    : posts

  return (
    <div className="w-full flex flex-col justify-between items-start min-h-[380px]">
      <SearchPost />
      {filteredPosts.length === 0 && filteredPosts.length === 0 && <NoPosts />}
      <ul className="w-full min-h-[208px] grid grid-cols-1 md:grid-cols-3 my-2 py-2">
        {filteredPosts.length > 0 &&
          filteredPosts.map((post: FormattedPost) => (
            <PostCard key={post.slug} {...post} />
          ))}
      </ul>
    </div>
  )
}
