import Link from "next/link"
import { ArrowUpRight, Award, BookOpen, CheckCircle2 } from "lucide-react"
import { credentials } from "@/lib/credentials"

export default function Credentials({ full = false }: { full?: boolean }) {
  const certifications = credentials.filter((item) => item.kind === "Certification")
  const learning = credentials.filter((item) => item.kind === "Learning")
  const visibleCertifications = full ? certifications : certifications.slice(0, 2)
  const visibleLearning = full ? learning : learning.slice(0, 2)

  return (
    <section id="credentials" className="portfolio-section credentials-section">
      <div className="mx-auto max-w-6xl">
        <div className="section-intro">
          <p className="eyebrow">Proof of practice</p>
          <h2 className="section-heading">Credentials and continuous learning.</h2>
          <p className="section-lede">A living record of the certifications, courses, and ideas shaping how I build.</p>
        </div>

        <div className="credential-groups">
          <CredentialGroup title="Professional certifications" icon={<Award size={20} />} items={visibleCertifications} />
          <CredentialGroup title="Learning in progress" icon={<BookOpen size={20} />} items={visibleLearning} />
        </div>
        {!full && (certifications.length > 2 || learning.length > 2) && (
          <div className="credentials-footer"><Link href="/credentials" className="text-link">View full credentials gallery <ArrowUpRight size={16} /></Link></div>
        )}
      </div>
    </section>
  )
}

function CredentialGroup({ title, icon, items }: { title: string; icon: React.ReactNode; items: typeof credentials }) {
  return (
    <div className="credential-group">
      <div className="credential-group-heading"><span className="credential-icon">{icon}</span><h3>{title}</h3></div>
      <div className="credential-grid">
        {items.map((item) => (
          <article key={`${item.issuer}-${item.name}`} className="credential-card">
            <div className="credential-card-top"><span className="credential-kind">{item.kind}</span><span>{item.year}</span></div>
            <h4>{item.name}</h4>
            <p className="credential-issuer">{item.issuer}</p>
            <p className="credential-detail">{item.detail}</p>
            {item.href ? <a href={item.href} target="_blank" rel="noreferrer" className="text-link">Verify credential <ArrowUpRight size={15} /></a> : <span className="credential-learning"><CheckCircle2 size={15} /> Personal curriculum</span>}
          </article>
        ))}
      </div>
    </div>
  )
}
