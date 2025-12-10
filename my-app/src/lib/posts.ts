import PostList from "@/app/blog/_components/post-list";
import { Post } from "@/types/post";
import { Ruthie } from "next/font/google";

export async function feachPosts(): Promise<Post[]> {
  return [
    {
      id: '1',
      title: 'Next.jsの基礎',
      date: '2024-01-01',
      content: 'Next.jsの基礎内容です。',
    },
    {
      id: '2',
      title: 'Server/Client Componentの違い',
      date: '2024-02-10',
      content: 'ServerとClientの違いを説明します。',
    },
    {
      id: '3',
      title: 'App Router入門',
      date: '2024-03-15',
      content: 'App Routerの使い方について解説します。',
    }
  ]
}

export async function getPostById(id: string): Promise<Post | undefined> {
  const posts = await feachPosts()
  return posts.find((post) => post.id === id)
}