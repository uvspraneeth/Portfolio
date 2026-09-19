export type Credential = {
  name: string
  issuer: string
  year: string
  kind: "Certification" | "Learning"
  detail: string
  href?: string
}

export const credentials: Credential[] = [
  {
    name: "Professional Machine Learning Engineer",
    issuer: "Google Cloud",
    year: "2023",
    kind: "Certification",
    detail: "Production ML systems, model serving, and responsible AI.",
    href: "https://cloud.google.com/learn/certification/machine-learning-engineer",
  },
  {
    name: "Machine Learning Specialty",
    issuer: "Amazon Web Services",
    year: "2022",
    kind: "Certification",
    detail: "ML workflows, deployment patterns, and cloud architecture.",
    href: "https://aws.amazon.com/certification/certified-machine-learning-specialty/",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    year: "2024",
    kind: "Learning",
    detail: "Neural networks, sequence models, and practical model development.",
    href: "https://www.deeplearning.ai/courses/deep-learning-specialization/",
  },
  {
    name: "Data Engineering Foundations",
    issuer: "Learning path",
    year: "2024",
    kind: "Learning",
    detail: "Reliable pipelines, dimensional modeling, and data quality practices.",
  },
  {
    name: "Data Engineering Foundations",
    issuer: "Learning path",
    year: "2024",
    kind: "Learning",
    detail: "Reliable pipelines, dimensional modeling, and data quality practices.",
  },
  {
    name: "Data Engineering Foundations",
    issuer: "Learning path",
    year: "2024",
    kind: "Learning",
    detail: "Reliable pipelines, dimensional modeling, and data quality practices.",
  },
]
