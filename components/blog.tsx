import Link from "next/link"
import { ArrowUpRight, Calendar, Clock } from "lucide-react"
import { getAllPosts } from "@/lib/blog"

export default function Blog() {
  const posts = getAllPosts()

  return (
    <section id="blog" className="portfolio-section blog-section">
      <div className="mx-auto max-w-6xl">
        <div className="section-intro">
          <p className="eyebrow">Notes from the work</p>
          <h2 className="section-heading">Ideas, experiments, and field notes.</h2>
          <p className="section-lede">Short articles about data, machine learning, and the choices behind useful systems.</p>
        </div>

        <div className="blog-list">
          {posts.map((post) => (
            <article key={post.slug} className="blog-row blog-card">
              <div className="blog-meta">
                <span><Calendar size={14} /> {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                <span><Clock size={14} /> {post.readTime}</span>
              </div>
              <div className="blog-main">
                <div>
                  <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-tags">{post.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <Link className="blog-read-link" href={`/blog/${post.slug}`}>Read article <ArrowUpRight size={16} /></Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-footer"><Link href="/blog" className="text-link">Browse all notes <ArrowUpRight size={16} /></Link></div>
      </div>
    </section>
  )
}
