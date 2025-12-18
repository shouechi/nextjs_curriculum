'use client'
import { createPost } from '@/app/actions/post'
import { useActionState } from 'react'

export default function PostForm() {
  const initialSate = { error: undefined }
  const [state, formAction, isPending] = useActionState(
    createPost,
    initialSate,
  )
  return (
    <form
      action={formAction}
      className="mx-auto max-w-xl space-y-4 rounded border border-gray-200 bg-white p-6 shadow"
    >
      <h2 className="text-2xl font-semibold text-gray-800">新規投稿</h2>

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
          className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:outline-none"
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
          rows={6}
          className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:outline-none"
        />
      </div>

      {state.error && <div className="text-sm text-red-600">{state.error}</div>}
      <button
        type="submit"
        className="w-full rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        disabled={isPending}
      >
        {isPending ? '投稿中...' : '投稿する'}
      </button>
    </form>
  )
}