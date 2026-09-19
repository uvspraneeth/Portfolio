export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  metric: string
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: "Customer churn prediction",
    description:
      "An interpretable model that helps subscription teams identify retention risks before they become lost revenue.",
    image: "/placeholder.svg?height=520&width=760&text=Churn+prediction",
    tags: ["Python", "Scikit-learn", "XGBoost", "Streamlit"],
    metric: "94% accuracy",
    github: "https://github.com/",
    demo: "https://streamlit.io/",
  },
  {
    title: "Real-time fraud detection",
    description:
      "A streaming inference system designed to score high-volume transactions with low latency and clear alert signals.",
    image: "/placeholder.svg?height=520&width=760&text=Fraud+detection",
    tags: ["TensorFlow", "Kafka", "GCP", "Docker"],
    metric: "10k+ events/sec",
    github: "https://github.com/",
    demo: "https://cloud.google.com/",
  },
  {
    title: "NLP sentiment analysis",
    description:
      "A multilingual text classification pipeline that turns unstructured customer feedback into product insights.",
    image: "/placeholder.svg?height=520&width=760&text=Sentiment+analysis",
    tags: ["PyTorch", "Transformers", "BERT", "FastAPI"],
    metric: "92% F1 score",
    github: "https://github.com/",
    demo: "https://huggingface.co/",
  },
]
