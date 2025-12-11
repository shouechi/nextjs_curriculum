import { Post } from "@/types/post";
import BackButton from "./back-button";

type Props = {
  post: Post
}

export default function PostDetail({ post }: Props) {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-2 text-2xl font-bold">{post.title}</h1>
      <p className="mb-4 text-sm text-gray-500">{post.date}</p>
      <div className="prose">{post.content}</div>

      <BackButton />
    </div>
  )
}