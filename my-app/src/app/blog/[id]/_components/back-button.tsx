'use client'

import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="mt-6 rounded bg-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
    >
      ← 戻る
    </button>
  )
}