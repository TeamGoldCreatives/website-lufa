// ─────────────────────────────────────────────────────────────────────────────
// lib/data.ts
// Single source of truth for all resume content.
// Change content here — the UI updates automatically everywhere.
// ─────────────────────────────────────────────────────────────────────────────

export const person = {
  name: 'Oluwasola Alufa',
  pronouns: 'he/him',
  verified: true,
  about: 'A DevOps & Site Reliability engineer with 5+ years of experience in building web and mobile apps.',
  avatar: 'https://framerusercontent.com/images/bwPEMOKlX7LJDQ6P1O6YEpt0CLE.jpeg?lossless=1&width=800&height=800',
  contact: {
    email: 'alufasola@gmail.com',
    website: 'lufa.com.ng',
    phone: '+234-813-538-7664',
  },
  social: [
    { id: 'twitter', href: 'https://x.com', label: 'X (Twitter)' },
    { id: 'instagram', href: 'https://instagram.com', label: 'Instagram' },
    { id: 'linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
    { id: 'github', href: 'https://github.com', label: 'GitHub' },
  ],
}

export const skills = [
  'Kubernetes', 'Terraform', 'Python', 'Git',
  'Agile', 'CI/CD', 'Monitoring', 'Docker',
  'Postgres/MSSql', 'Postman', 'AWS',
]

export const languages = ['English', 'French']

export const intro = `Sola is a skilled DevOps engineer who specializes in designing, automating, and maintaining cloud infrastructure to ensure seamless and reliable application delivery. With hands-on experience in managing container orchestration, continuous integration and deployment pipelines, and infrastructure as code, Sola focuses on enhancing system scalability, security, and observability.

Having worked across diverse environments, thrives on optimising workflows and collaborating with development teams to support innovation and operational excellence.`

export interface Project {
  id: number
  title: string
  date: string
  role: string
  category: string
  url: string
  coverImage: string
  logoImage: string
  bgColor: string
  stack: string[]   // technology tags shown as pills on each card
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Enterprise Application',
    date: 'Jan 24, 2024',
    role: 'DevOps Engineer',
    category: 'In-House Application',
    url: 'https://portal.mygreenpole.com',
    coverImage: 'https://framerusercontent.com/images/C5b8yj0y9s5ohUAbJWn7At8XK0.png?lossless=1&width=1616&height=878',
    logoImage: 'https://framerusercontent.com/images/TiABYHBQxYzz4dNwyHegIsPY.png?width=344&height=144',
    bgColor: '#F0FDF4',
    stack: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'CI/CD', 'Postgres'],
  },
  {
    id: 2,
    title: 'Personal Investment Portfolio Tracker',
    date: 'Mar 15, 2024',
    role: 'DevOps Engineer',
    category: 'Fintech / Capital Market',
    url: 'https://sabivest.com',
    coverImage: 'https://framerusercontent.com/images/AacE7HgH7Fy97tvrY7jrPSi4g6o.jpeg?width=153&height=153',
    logoImage: 'https://framerusercontent.com/images/AacE7HgH7Fy97tvrY7jrPSi4g6o.jpeg?width=153&height=153',
    bgColor: '#F0F9FF',
    stack: ['Docker', 'AWS', 'Python', 'Terraform', 'Monitoring'],
  },
  {
    id: 3,
    title: 'ARHDAY Photography Portfolio',
    date: 'Apr 29, 2026',
    role: 'Fullstack Developer',
    category: 'Photography Portfolio',
    url: 'https://bookarhday.com',
    coverImage: 'https://framerusercontent.com/images/C5b8yj0y9s5ohUAbJWn7At8XK0.png?lossless=1&width=1616&height=878',
    logoImage: 'https://framerusercontent.com/images/TiABYHBQxYzz4dNwyHegIsPY.png?width=344&height=144',
    bgColor: '#0A0A0A',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Prisma'],
  },
  {
    id: 4,
    title: 'Sands of Time VR',
    date: 'Jan 12, 2024',
    role: 'Fullstack Developer',
    category: 'VR Gaming Community',
    url: 'https://sandsoftimevr.com',
    coverImage: 'https://framerusercontent.com/images/2RIS8biLfaJNH1sZzJrdt0lSK0k.png?width=2866&height=1512',
    logoImage: 'https://framerusercontent.com/images/oskMBKq8hcOmgo1Xz7X8nBboew.png?scale-down-to=512&width=796&height=926',
    bgColor: '#1C2B2B',
    stack: ['Figma', 'Framer'],
  },
]

export interface Experience {
  id: number
  role: string
  period: string
  company: string
  location: string
  description: string
  logo: string
  current: boolean
}

export const experience: Experience[] = [
  {
    id: 1,
    role: 'DevOps Engineer',
    period: 'Jul 25 – Present',
    company: 'Africa Prudential Plc.',
    location: 'Lagos, NG',
    description: 'Spearheaded the development of a suite of progressive web applications using React and Swift, and GraphQL.',
    logo: 'https://framerusercontent.com/images/WHK61O8g08G87l9yTeGc1TpnZ5Y.png?lossless=1&width=80&height=74',
    current: true,
  },
  {
    id: 2,
    role: 'Technical Support Engineer',
    period: 'Oct 23 – Apr 25',
    company: 'Microsoft Inc.',
    location: 'Lagos, NG',
    description: 'Enhanced user interfaces for the Sigma Web Player using React and Redux, achieving a 25% increase in user engagement.',
    logo: 'https://framerusercontent.com/images/T6IAxfRelIw8A8iKBjnddyR7Nk.png?lossless=1&width=64&height=66',
    current: false,
  },
  {
    id: 3,
    role: 'Technical Support Engineer',
    period: 'Oct 23 – Apr 25',
    company: 'Tek Experts Ltd.',
    location: 'Lagos, NG',
    description: 'Involved in the lifecycle of feature development from conception to deployment, emphasizing responsive design and accessibility standards.',
    logo: 'https://framerusercontent.com/images/sdT0fmrJxsDfvxwPx7zHTHu5s.png?width=206&height=232',
    current: false,
  },
]

export interface Education {
  id: number
  degree: string
  period: string
  institution: string
  location: string
  description: string
  logo: string
}

export const education: Education[] = [
  {
    id: 1,
    degree: 'Diploma in Cloud Engineering',
    period: 'Mar 22 – Jun 23',
    institution: 'Alt School Africa',
    location: 'Lagos, NG',
    description: 'Specialized in Software Engineering. Completed thesis on "Scalable Architectures for Real-Time Web Applications" and graduated with distinction.',
    logo: 'https://framerusercontent.com/images/sfsGVoHTNPjT5PevAHiIvZb8mQ4.png?width=560&height=560',
  },
  {
    id: 2,
    degree: 'Bachelor of Science in Civil Engineering',
    period: 'Nov 12 – Mar 18',
    institution: 'The Federal University of Technology, Akure',
    location: 'Ondo, NG',
    description: 'Graduated with honors. Relevant coursework included Advanced Algorithms, Web Development, and User Interface Design.',
    logo: 'https://framerusercontent.com/images/oC8kVQyyJcXgNr34pgAovJiAu0.png?lossless=1&width=130&height=110',
  },
]

export interface Certification {
  id: number
  name: string
  issued: string
  logo: string
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: 'LFD259: Kubernetes for Developers',
    issued: 'Issued 2025',
    logo: 'https://framerusercontent.com/images/Zaz9MwRjGIw1A5q24qV2HvFsgU.png?width=560&height=560',
  },
  {
    id: 2,
    name: 'Kubernetes and Cloud Native Associate',
    issued: 'Issued 2025',
    logo: 'https://framerusercontent.com/images/MkmFFKMgYAZpZFgxzn8386lBLI.png?width=560&height=560',
  },
]

export interface Testimonial {
  id: number
  name: string
  title: string
  avatar: string
  companyLogo: string
  quote: string
  stars: number
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Peace Olatunji',
    title: 'Founder at Dopay Films Ltd',
    avatar: 'https://framerusercontent.com/images/85SQAQypYQ32dm7qiRHSnzB31o.jpeg?lossless=1&width=800&height=800',
    companyLogo: 'https://framerusercontent.com/images/U6OYSsWKF0bKokRcNiHSQ09KPOE.png?width=560&height=560',
    quote: "Having worked alongside Henry at Sigma, I've been consistently impressed by his exceptional skills as a frontend engineer. Henry's hands-on approach and dedication to building robust web and mobile applications have greatly contributed to our project's success.",
    stars: 5,
  },
  {
    id: 2,
    name: 'Raj Patel',
    title: 'Junior Software Engineer at Omega, worked with Henry on the same team',
    avatar: 'https://framerusercontent.com/images/ZFn2FUlFYpIyKQdnJBr2MK32lI.jpg?width=3383&height=5074',
    companyLogo: 'https://framerusercontent.com/images/SoU4ybasKLH9JN9QiP88jrmP4nA.png?width=560&height=560',
    quote: "Sola's expertise has been crucial in turning our ambitious project ideas into reality at Omega. His proficiency in both front-end and back-end development ensures a seamless integration of features, delivering a user experience that's both intuitive and high-performing.",
    stars: 5,
  },
]

export interface ContactLink {
  label: string
  value: string
  href: string
}

export const contactLinks: ContactLink[] = [
  { label: 'Email', value: 'alufasola@gmail.com', href: 'mailto:alufasola@gmail.com' },
  { label: 'Phone', value: '+2348135387664', href: 'tel:+2348054801234' },
  { label: 'Meeting', value: 'Book call', href: 'https://cal.com/solaalufa/30min' },
  { label: 'Website', value: '', href: '' },
  { label: 'X (Twitter)', value: '@solaoluwalufa', href: 'http://x.com/solaoluwalufa' },
  { label: 'LinkedIn', value: '/solaalufa', href: 'https://www.linkedin.com/in/solaalufa/' },
]
