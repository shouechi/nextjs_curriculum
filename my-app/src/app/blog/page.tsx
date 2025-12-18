import { fetchPost } from "@/lib/posts";
import PostList from "./_components/post-list"
import Link from "next/link"

export default async function BlogPage() {
  const posts = await fetchPost()

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-4 text-2xl font-bold">投稿一覧</h1>
      <Link
          href="/blog/new"
          className="rounded bg-green-500 px-4 py-1 whitespace-nowrap text-white hover:bg-green-600"
        >
          新規作成
        </Link>
      <PostList posts={posts} />
    </div>
  )
}