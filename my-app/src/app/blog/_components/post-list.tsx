'use client'

import { Post } from "@/types/post"
import { useState } from "react"

type Props = {
  posts: Post[]
}

export default function PostList({ posts }: Props) {
  const [likes, setLikes] = useState<{ [id: string]: number }>({})
  const [filter, setFilter] = useState('')
  
  const handleLike = (id: string) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1}))
  }

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(filter.toLocaleLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        placeholder="タイトルで検索"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 w-full rounded border border-gray-300 p-2"
      />
      <ul className="space-y-4">
        {filteredPosts.map((post) => (
          <li
            key={post.id}
            className="flex items-center justify-between rounded border border-gray-200 p-4 shadow-sm"
          >
            <div>
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
            <button
              onClick={() => handleLike(post.id)}
              className="ml-4 rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
            >
              👍 {likes[post.id] || 0}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}