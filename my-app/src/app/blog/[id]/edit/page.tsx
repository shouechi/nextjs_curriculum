import { getPostById } from '@/lib/posts'
import PostForm from '../../_components/post-form'
import { notFound } from 'next/navigation'

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = await getPostById(id)

  if (!post) return notFound()

  return (
    <div className="px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <PostForm
          type="edit"
          initialValues={{
            id: post.id,
            title: post.title,
            content: post.content,
          }}
        />
      </div>
    </div>
  )
}