'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  VerifiedIcon, MailIcon, GlobeIcon, PhoneIcon,
  XIcon, InstagramIcon, LinkedinIcon, GithubIcon, YoutubeIcon,
} from '@/components/ui/Icons'
import { person, skills } from '@/lib/data'

// Sidebar entry animation
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}
const item = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function SideLabel({ children }: { children: string }) {
  return (
    <p style={{ fontSize: '10.5px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#AAAAAA', marginBottom: '10px' }}>
      {children}
    </p>
  )
}

export function Sidebar() {
  return (
    <motion.aside
      initial="hidden"
      animate="show"
      variants={container}
      className="w-full lg:w-[272px] xl:w-[288px] flex-shrink-0"
      style={{ position: 'sticky', top: 32, alignSelf: 'flex-start' }}
    >
      {/* ── Avatar ───────────────────────────────── */}
      <motion.div variants={item} className="mb-5">
        <div
          className="w-[76px] h-[76px] rounded-full overflow-hidden"
          style={{ border: '2px solid #E8E8E8' }}
        >
          <Image
            src={person.avatar}
            alt={person.name}
            width={76}
            height={76}
            className="w-full h-full object-cover grayscale"
            priority
          />
        </div>
      </motion.div>

      {/* ── Name + pronouns ──────────────────────── */}
      <motion.div variants={item} className="mb-6">
        <div className="flex items-center gap-1.5 mb-0.5">
          <h1 style={{ fontSize: '22px', fontWeight: 600, color: '#111111', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            {person.name}
          </h1>
          {person.verified && (
            <span className="flex-shrink-0 mt-0.5">
              <VerifiedIcon size={18} />
            </span>
          )}
        </div>
        <p style={{ fontSize: '14px', color: '#9CA3AF' }}>{person.pronouns}</p>
      </motion.div>

      {/* ── About ────────────────────────────────── */}
      <motion.div variants={item} className="mb-6">
        <SideLabel>About</SideLabel>
        <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.65 }}>
          {person.about}
        </p>
      </motion.div>

      {/* ── Contact ──────────────────────────────── */}
      <motion.div variants={item} className="mb-6">
        <SideLabel>Contact</SideLabel>
        <div className="flex flex-col gap-2.5">
          <a href={`mailto:${person.contact.email}`} className="contact-item">
            <MailIcon size={15} className="text-gray-400 flex-shrink-0" />
            <span style={{ fontSize: '14px' }}>{person.contact.email}</span>
          </a>
          <a href={`https://${person.contact.website}`} target="_blank" rel="noopener noreferrer" className="contact-item">
            <GlobeIcon size={15} className="text-gray-400 flex-shrink-0" />
            <span style={{ fontSize: '14px' }}>{person.contact.website}</span>
          </a>
          <a href={`tel:${person.contact.phone}`} className="contact-item">
            <PhoneIcon size={15} className="text-gray-400 flex-shrink-0" />
            <span style={{ fontSize: '14px' }}>{person.contact.phone}</span>
          </a>
        </div>
      </motion.div>

      {/* ── Skills ───────────────────────────────── */}
      <motion.div variants={item} className="mb-8">
        <SideLabel>Skills</SideLabel>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">{skill}</span>
          ))}
        </div>
      </motion.div>

      {/* ── Social icons ─────────────────────────── */}
      <motion.div variants={item}>
        <div className="flex items-center gap-4">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (Twitter)">
            <XIcon size={17} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
            <InstagramIcon size={17} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <LinkedinIcon size={17} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <GithubIcon size={17} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
            <YoutubeIcon size={17} />
          </a>
        </div>
      </motion.div>
    </motion.aside>
  )
}
