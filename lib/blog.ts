import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/posts")

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  readTime: string
  content: string
}

function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return []
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"))
}

function parsePost(fileName: string): BlogPost {
  const source = fs.readFileSync(path.join(postsDirectory, fileName), "utf8")
  const { data, content } = matter(source)
  const words = content.trim().split(/\s+/).length

  return {
    slug: fileName.replace(/\.md$/, ""),
    title: String(data.title ?? "Untitled post"),
    excerpt: String(data.excerpt ?? ""),
    date: String(data.date ?? "1970-01-01"),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readTime: String(data.readTime ?? `${Math.max(1, Math.ceil(words / 220))} min read`),
    content,
  }
}

export function getAllPosts() {
  return getPostSlugs()
    .map(parsePost)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string) {
  const fileName = `${slug}.md`
  return getPostSlugs().includes(fileName) ? parsePost(fileName) : null
}
