import { PostCard } from "@components/PostCard"
import { FormattedPost, PostsListProps } from "@types"

export function PostsList({ posts }: PostsListProps): JSX.Element {
  return (
    <ul className="w-full min-h-[221px] my-2 py-2 flex flex-col">
      {posts.map((post: FormattedPost) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </ul>
  )
}
