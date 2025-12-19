import { Post } from "@/types/post";
import BackButton from "./back-button";
import Link from "next/link";
import { DeleteButton } from "./delete-button";
type Props = {
  post: Post
}

export default function PostDetail({ post }: Props) {
  return (
    <div className="mx-auto max-w-3xl p-6">
      {/* 戻るボタン */}
      <BackButton />
      <h1 className="my-2 text-2xl font-bold">{post.title}</h1>
      <p className="mb-4 text-sm text-gray-500">{post.date}</p>
      <div className="prose mb-6">{post.content}</div>

      <div className="flex items-center gap-4">
        {/* 編集ボタン */}
        <Link
          href={`/blog/${post.id}/edit`}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          編集
        </Link>
        {/* 削除ボタン */}
        <DeleteButton id={post.id} />
      </div>
    </div>
  )
}