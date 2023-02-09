import { useContext } from "react"
import { FormattedPost } from "../../../@types/global"
import { GlobalContext } from "../../contexts/GlobalContext"
import { NoPosts } from "../NoPosts"
import { PostCard } from "../PostCard"
import { SearchPost } from "../SearchPost"

export function BlogContent(): JSX.Element {
  const { posts, searchValue } = useContext(GlobalContext)
  const allPosts = posts
  const filteredPosts = searchValue
    ? allPosts.filter((post: FormattedPost) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
    : posts

  return (
    <div className="w-full min-h-[50vh] flex flex-col justify-around items-center">
      <SearchPost />
      <ul className="w-full min-h-[30vh] flex flex-col justify-around items-center">
        {filteredPosts.length > 0 &&
          filteredPosts.map((post: FormattedPost) => (
            <PostCard key={post.slug} {...post} />
          ))}
        {filteredPosts.length === 0 && filteredPosts.length === 0 && (
          <NoPosts />
        )}
      </ul>
    </div>
  )
}
