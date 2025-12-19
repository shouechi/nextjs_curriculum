'use client'

import { deletePost } from '@/app/actions/post'

export function DeleteButton({ id }: { id: string }) {
  const handleDelete = async () => {
    const ok = window.confirm('本当に削除しますか？')

    if (ok) {
      await deletePost(id)
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
    >
      削除
    </button>
  )
}
