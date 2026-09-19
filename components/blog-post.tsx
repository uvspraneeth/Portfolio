import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function BlogPost({ content }: { content: string }) {
  return <div className="prose-portfolio"><ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown></div>
}
