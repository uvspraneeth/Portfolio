import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { notFound } from "next/navigation"
import BlogPost from "@/components/blog-post"
import { getAllPosts, getPost } from "@/lib/blog"

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug)
  return post ? { title: `${post.title} | Uvs.Praneeth`, description: post.excerpt } : {}
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  return (
    <main className="article-shell">
      <div className="article-topbar"><Link href="/#blog" className="text-link"><ArrowLeft size={16} /> Back to portfolio</Link></div>
      <article className="article-page">
        <header className="article-header">
          <p className="eyebrow">Field note</p>
          <h1>{post.title}</h1>
          <p className="article-excerpt">{post.excerpt}</p>
          <div className="article-meta"><span><Calendar size={15} /> {new Date(post.date).toLocaleDateString("en-US", { dateStyle: "long" })}</span><span><Clock size={15} /> {post.readTime}</span></div>
        </header>
        <BlogPost content={post.content} />
      </article>
    </main>
  )
}
