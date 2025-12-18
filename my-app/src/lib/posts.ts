import { promises as fs} from 'fs'
import path from 'path'
import { Post } from '@/types/post'

const filePaht = path.join(process.cwd(), 'src/data/posts.json')

export async function fetchPost(): Promise<Post[]> {
  const data = await fs.readFile(filePaht, 'utf-8')
  return JSON.parse(data)
}

export async function getPostById(id: string): Promise<Post | undefined> {
  const posts = await fetchPost()
  return posts.find((post) => post.id === id)
}