import Link from "next/link"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { getAllPosts } from "@/lib/blog"

export default function AnnouncementBar() {
  const latestPost = getAllPosts()[0]
  if (!latestPost) return null

  return (
    <div className="announcement-bar" role="status">
      <div className="announcement-track">
        <Link href={`/blog/${latestPost.slug}`} className="announcement-item">
          <Sparkles size={14} aria-hidden="true" />
          <span>New note: {latestPost.title}</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
        <span className="announcement-dot" aria-hidden="true">/</span>
        <Link href={`/blog/${latestPost.slug}`} className="announcement-item" aria-hidden="true" tabIndex={-1}>
          <Sparkles size={14} aria-hidden="true" />
          <span>New note: {latestPost.title}</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
