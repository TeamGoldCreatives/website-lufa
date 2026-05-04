'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  PersonIcon, FolderIcon, BriefcaseIcon,
  GraduationCapIcon, AwardIcon, HeartIcon, DockMailIcon,
} from '@/components/ui/Icons'

const SECTIONS = [
  { id: 'intro',         label: 'Intro',           Icon: PersonIcon },
  { id: 'projects',      label: 'Projects',        Icon: FolderIcon },
  { id: 'experience',    label: 'Experience',      Icon: BriefcaseIcon },
  { id: 'education',     label: 'Education',       Icon: GraduationCapIcon },
  { id: 'certifications', label: 'Certifications', Icon: AwardIcon },
  { id: 'testimonials',  label: 'Testimonials',    Icon: HeartIcon },
  { id: 'contact',       label: 'Contact',         Icon: DockMailIcon },
]

export function BottomNav() {
  const [active, setActive] = useState('intro')

  // Track which section is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActive(id)
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bottom-dock"
      aria-label="Section navigation"
    >
      {SECTIONS.map(({ id, label, Icon }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          title={label}
          aria-label={label}
          className={`dock-btn${active === id ? ' active' : ''}`}
        >
          <Icon size={17} />
        </button>
      ))}
    </motion.nav>
  )
}
