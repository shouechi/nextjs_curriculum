'use client'
import { useActionState } from 'react'
import { createPost, updatePost } from '@/app/actions/post'

type Props = {
  type: 'create' | 'edit'
  initialValues?: {
    id?: string
    title: string
    content: string
  }
}
export default function PostForm({ type, initialValues }: Props) {
  const initialState = { error: undefined }
  const [state, formAction, isPending] = useActionState(
    type === 'create' ? createPost : updatePost,
    initialState,
  )
  return (
    <form
      action={formAction}
      className="mx-auto max-w-xl space-y-4 rounded border border-gray-200 bg-white p-6 shadow"
    >
      {type === 'edit' && initialValues?.id && (
        <input type="hidden" name="id" value={initialValues.id} />
      )}
      <h2 className="text-2xl font-semibold text-gray-800">
        {type === 'create' ? '新規投稿' : '投稿を編集'}
      </h2>

      <div>
        <label
          htmlFor="title"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          タイトル
        </label>
        <input
          id="title"
          name="title"
          placeholder="タイトル"
          defaultValue={initialValues?.title ?? ''}
          className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:outline-none"
          required
        />
      </div>

      <div>
        <label
          htmlFor="content"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          内容
        </label>
        <textarea
          id="content"
          name="content"
          placeholder="内容"
          defaultValue={initialValues?.content ?? ''}
          rows={6}
          className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:outline-none"
          required
        />
      </div>

      {state.error && (
        <div className="mb-2 text-sm text-red-600">{state.error}</div>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-500 px-4 py-2 text-white"
      >
        {isPending
          ? type === 'create'
            ? '投稿中...'
            : '更新中...'
          : type === 'create'
            ? '投稿する'
            : '更新する'}
      </button>
    </form>
  )
}
