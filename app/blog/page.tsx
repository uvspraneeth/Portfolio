import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Blog from "@/components/blog"

export default function BlogIndexPage() {
  return (
    <main className="article-shell">
      <div className="article-topbar"><Link href="/#blog" className="text-link"><ArrowLeft size={16} /> Back to portfolio</Link></div>
      <Blog />
    </main>
  )
}
