'use server'

import { redirect } from 'next/navigation'
import { promises as fs } from 'fs'
import path from 'path'
import { Post } from '@/types/post'

const filePath = path.join(process.cwd(), 'src/data/posts.json')

type FormState = {
  error?: string
}

export async function createPost(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const title = formData.get('title') as string
  const content = formData.get('content') as string

  if (!title || !content) {
    return { error: 'タイトルと内容は必須です。' }
  }

  // 現在の投稿一覧を読み込み
  const data = await fs.readFile(filePath, 'utf-8')
  const posts: Post[] = JSON.parse(data)

  // 新規投稿を作成
  const newPost: Post = {
    id: String(posts.length + 1),
    title,
    content,
    date: new Date().toISOString().slice(0, 10),
  }

  // 新しい投稿を追加してファイルに書き込み
  posts.push(newPost)
  try {
    await fs.writeFile(filePath, JSON.stringify(posts, null, 2), 'utf-8')
  } catch {
    return { error: '保存に失敗しました。' }
  }

  redirect('/blog')
}

export async function updatePost(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const id = formData.get('id') as string
  const title = formData.get('title') as string
  const content = formData.get('content') as string

  if (!id || !title || !content) {
    return { error: 'すべての項目を入力してください。' }
  }

  const data = await fs.readFile(filePath, 'utf-8')
  const posts: Post[] = JSON.parse(data)

  const updatedPosts = posts.map((post) =>
    post.id === id ? { ...post, title, content } : post,
  )

  try {
    await fs.writeFile(filePath, JSON.stringify(updatedPosts, null, 2), 'utf-8')
  } catch {
    return { error: '更新に失敗しました。' }
  }
  redirect('/blog')
}

export async function deletePost(id: string) {
  const data = await fs.readFile(filePath, 'utf-8')
  const posts: Post[] = JSON.parse(data)
  const updatedPosts = posts.filter((post) => post.id !== id)

  try {
    await fs.writeFile(filePath, JSON.stringify(updatedPosts, null, 2), 'utf-8')
  } catch {
    return { error: '削除に失敗しました。' }
  }

  redirect('/blog')
}