import { feachPosts } from "@/lib/posts";
import PostList from "./_components/post-list"

export default async function BlogPage() {
  const posts = await feachPosts()

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-4 text-2xl font-bold">投稿一覧</h1>
      <PostList posts={posts} />
    </div>
  )
}