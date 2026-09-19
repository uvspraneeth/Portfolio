import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Credentials from "@/components/credentials"

export default function CredentialsPage() {
  return (
    <main className="article-shell">
      <div className="article-topbar"><Link href="/#credentials" className="text-link"><ArrowLeft size={16} /> Back to portfolio</Link></div>
      <Credentials full />
    </main>
  )
}