import { NoPosts } from "@components/NoPosts"
import { PostsList } from "@components/PostsList"
import { GlobalContext } from "@contexts/GlobalContext"
import * as React from "react"

export function BlogContent(): JSX.Element {
  const { posts } = React.useContext(GlobalContext)

  return (
    <div className="w-full flex flex-col justify-between items-start min-h-[280px]">
      {posts.length === 0 && <NoPosts />}
      {posts.length > 0 && <PostsList posts={posts} />}
    </div>
  )
}
