import Link from "next/link"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { getAllPosts } from "@/lib/blog"

export default function AnnouncementBar() {
  const latestPost = getAllPosts()[0]
  if (!latestPost) return null

  return (
    <div className="announcement-bar" role="status">
      <div className="announcement-track">
        <span className="announcement-label"><Sparkles size={14} aria-hidden="true" /> Latest note</span>
        <span className="announcement-divider" aria-hidden="true" />
        <Link href={`/blog/${latestPost.slug}`} className="announcement-item">
          <span>{latestPost.title}</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
