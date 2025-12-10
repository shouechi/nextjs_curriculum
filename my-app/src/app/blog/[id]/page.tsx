import { getPostById } from "@/lib/posts";
import { notFound } from "next/navigation";
import PostDetail from './_components/post-detail'

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string}>
}) {
  const { id } = await params
  const post = await getPostById(id)
  if (!post) notFound() //記事がない場合は404へ
  return <PostDetail post={post} />
} 