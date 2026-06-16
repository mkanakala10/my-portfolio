export const personal = {
  name: 'Manas Kanakala',
  title: 'Software Engineer',
  tagline:
    'I build scalable systems, intelligent pipelines, and products that feel instant at every layer.',
  email: 'kanakala@wisc.edu',
  phone: '425-577-4026',
  location: 'Redmond, WA',
  links: {
    github: 'https://github.com/mkanakala10',
    linkedin: 'https://linkedin.com/in/mkanakala10',
  },
}

export const education = [
  {
    school: 'University of Wisconsin–Madison',
    location: 'Madison, WI',
    degree: 'Master of Science in Computer Science',
    period: 'Sep 2026 – May 2028',
  },
  {
    school: 'University of Wisconsin–Madison',
    location: 'Madison, WI',
    degree: 'Bachelor of Science in Computer Science',
    detail: 'Data Science Minor · GPA 3.8/4.0',
    period: 'Sep 2023 – May 2026',
  },
]

export const experience = [
  {
    company: 'Unique Minds',
    role: 'AI Engineering Intern',
    location: 'Redmond, WA',
    period: 'Jun 2025 – Aug 2025',
    tech: ['TypeScript', 'React', 'Firebase', 'Tailwind CSS', 'Gemini API', 'Angular'],
    highlights: [
      'Architected modular component systems with shadcn/ui for instant renders and high reusability.',
      'Built event-driven Cloud Functions backend that automated AI content generation — 90% less manual work.',
      'Engineered real-time Firestore sync with React Context for collaborative, session-aware UX.',
      'Optimized Gemini pipelines via batching, parallel processing, and caching — 60% faster responses.',
    ],
  },
  {
    company: 'DiClano',
    role: 'Software Engineering Intern',
    location: 'Redmond, WA',
    period: 'Apr 2025 – Jun 2025',
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Redis', 'Stripe'],
    highlights: [
      'Shipped RBAC-enabled SaaS platform serving 1,000+ users with auth, org management, and billing.',
      'Developed 30+ REST endpoints with Redis rate limiting and P99 latency under 100ms.',
      'Established Alembic migrations for zero-downtime schema changes — 35% faster deployments.',
      'Integrated Stripe and Pusher for billing automation and real-time dashboard notifications.',
    ],
  },
  {
    company: 'VestaLabs',
    role: 'Software Engineering Intern',
    location: 'Bothell, WA',
    period: 'May 2024 – Aug 2024',
    tech: ['Python', 'GCP', 'Cloud Functions', 'BigQuery', 'Vertex AI'],
    highlights: [
      'Launched serverless video upload/deletion functions for high-traffic media operations.',
      'Architected GCS → BigQuery → Vertex AI pipeline for automated metadata extraction.',
      'Built REST APIs with custom BigQuery logging for monitoring and system analytics.',
    ],
  },
]

export const projects = [
  {
    title: 'Fliks',
    period: 'Nov 2025 – Present',
    tech: ['React', 'Vite', 'Python', 'FastAPI', 'Firebase', 'Gemini', 'PyTorch', 'Qdrant'],
    description:
      'I built Fliks, an Indian cinema app to browse trending films, search semantically, get personalized recommendations, and chat with an AI assistant — with a React frontend on GitHub Pages and a Python backend for search and recommendations.',
    accent: '#8B5A6B',
    featured: true,
    liveUrl: 'https://mkanakala10.github.io/fliks/',
    githubUrl: 'https://github.com/mkanakala10/fliks',
  },
  {
    title: 'Real-Time Streaming Data Pipeline',
    period: 'Jan 2025 – Feb 2025',
    tech: ['Java', 'Apache Kafka', 'Spark', 'Cassandra', 'Docker'],
    description:
      'I built a fault-tolerant pipeline ingesting Kafka streams with Spark Streaming stateful transforms at 10,000+ events/sec, stored in Cassandra for low-latency analytics.',
    accent: '#6B8F71',
  },
  {
    title: 'Predicting March Madness Outcomes',
    period: 'Mar 2025 – Apr 2025',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy'],
    description:
      'I trained ensemble models on 2,000+ games — boosting tournament matchup accuracy from 60.9% to 79.4% through feature engineering and model selection.',
    accent: '#C45D3E',
    githubUrl: 'https://github.com/mkanakala10/Predicting-March-Madness-Outcomes',
  },
]

export const skills = {
  Languages: ['Python', 'Java', 'SQL', 'JavaScript', 'TypeScript', 'C'],
  'Data & Infra': ['Kafka', 'Spark', 'Cassandra', 'Firebase', 'Redis', 'PostgreSQL', 'DynamoDB'],
  Frameworks: ['FastAPI', 'React', 'Flask', 'Pandas', 'PyTorch', 'Scikit-Learn', 'Angular', 'Node.js'],
  Tools: ['GCP', 'AWS', 'Docker', 'Git', 'Bash', 'Postman', 'Agile/Scrum', 'Tableau', 'Linux'],
}
