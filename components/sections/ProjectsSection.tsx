'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ArrowUpRightIcon, CalendarIcon } from '@/components/ui/Icons'
import { projects, type Project } from '@/lib/data'

const PILL_COLORS = [
  { bg: '#F3F4F6', text: '#374151' },
  { bg: '#FEF3C7', text: '#92400E' },
  { bg: '#E0F2FE', text: '#0369A1' },
  { bg: '#F0FDF4', text: '#166534' },
  { bg: '#F5F3FF', text: '#6B21A8' },
  { bg: '#FFF1F2', text: '#9F1239' },
]

function StackPill({ label, index }: { label: string; index: number }) {
  const color = PILL_COLORS[index % PILL_COLORS.length]
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '2px 9px',
        borderRadius: '999px',
        fontSize: '11px',
        fontWeight: 500,
        background: color.bg,
        color: color.text,
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}
    >
      {label}
    </span>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const isDark = project.bgColor.startsWith('#0') || project.bgColor.startsWith('#1')

  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.title}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        flexShrink: 0,
        background: '#fff',
        border: '1px solid #E8E8E8',
        borderRadius: '12px',
        overflow: 'hidden',
        textDecoration: 'none',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        scrollSnapAlign: 'start',
      }}
    >
      <div
        style={{
          height: '168px',
          background: project.bgColor,
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <Image
          src={project.coverImage}
          alt={`${project.title} screenshot`}
          fill
          style={{ objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.4s ease' }}
          sizes="300px"
          className="cover-img"
        />
        {isDark && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.45) 100%)',
            }}
          />
        )}
      </div>

      <div style={{ padding: '12px 14px', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              overflow: 'hidden',
              flexShrink: 0,
              border: '1px solid #E8E8E8',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src={project.logoImage}
              alt={`${project.title} logo`}
              width={32}
              height={32}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: '13.5px', fontWeight: 600, color: '#111111', marginBottom: '3px', lineHeight: 1.3 }}>
              {project.title}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '11.5px', color: '#9CA3AF' }}>
                <CalendarIcon size={11} />
                {project.date}
              </span>
              <span style={{ fontSize: '11.5px', color: '#9CA3AF' }}>{project.role}</span>
            </div>
          </div>
          <ArrowUpRightIcon size={13} className="text-gray-300 flex-shrink-0 mt-0.5" />
        </div>

        <p style={{ fontSize: '11.5px', color: '#6B7280' }}>{project.category}</p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '5px',
            marginTop: 'auto',
            paddingTop: '6px',
            borderTop: '1px solid #F2F2F2',
          }}
        >
          {project.stack.map((tech, i) => (
            <StackPill key={tech} label={tech} index={i} />
          ))}
        </div>
      </div>
    </Link>
  )
}

function ArrowBtn({
  direction, onClick, disabled,
}: {
  direction: 'left' | 'right'; onClick: () => void; disabled: boolean
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'left' ? 'Scroll left' : 'Scroll right'}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '30px', height: '30px', borderRadius: '50%',
        border: '1px solid #E8E8E8',
        background: disabled ? '#FAFAFA' : '#fff',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.35 : 1,
        transition: 'all 0.15s ease', flexShrink: 0,
      }}
    >
      <svg
        width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke={disabled ? '#CCCCCC' : '#374151'}
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        style={{ transform: direction === 'left' ? 'rotate(180deg)' : 'none' }}
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  )
}

export function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)
  const [activeIdx, setActiveIdx] = useState(0)
  const CARD_W = 300 + 12

  const updateState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 4)
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
    setActiveIdx(Math.round(el.scrollLeft / CARD_W))
  }, [CARD_W])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateState()
    el.addEventListener('scroll', updateState, { passive: true })
    return () => el.removeEventListener('scroll', updateState)
  }, [updateState])

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -CARD_W : CARD_W, behavior: 'smooth' })
  }

  const scrollTo = (i: number) => {
    scrollRef.current?.scrollTo({ left: i * CARD_W, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="scroll-mt-8">
      {/* Header + arrows */}
      <FadeIn>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <SectionLabel className="!mb-0">Projects</SectionLabel>
          <div style={{ display: 'flex', gap: '6px' }}>
            <ArrowBtn direction="left" onClick={() => scroll('left')} disabled={!canLeft} />
            <ArrowBtn direction="right" onClick={() => scroll('right')} disabled={!canRight} />
          </div>
        </div>
      </FadeIn>

      {/* Scroll track with edge fades */}
      <FadeIn delay={0.05}>
        <div style={{ position: 'relative' }}>
          {/* Left edge fade */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 8, width: '28px',
            background: 'linear-gradient(to right, #fff 60%, transparent)',
            zIndex: 2, pointerEvents: 'none',
            opacity: canLeft ? 1 : 0, transition: 'opacity 0.2s ease',
          }} />
          {/* Right edge fade */}
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 8, width: '28px',
            background: 'linear-gradient(to left, #fff 60%, transparent)',
            zIndex: 2, pointerEvents: 'none',
            opacity: canRight ? 1 : 0, transition: 'opacity 0.2s ease',
          }} />

          <div
            ref={scrollRef}
            style={{
              display: 'flex', gap: '12px',
              overflowX: 'auto', overflowY: 'hidden',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              paddingBottom: '8px',
              scrollbarWidth: 'thin',
              scrollbarColor: '#E0E0E0 transparent',
            }}
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ flexShrink: 0 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Dot indicators */}
      <FadeIn delay={0.1}>
        <div style={{ display: 'flex', gap: '5px', marginTop: '10px', justifyContent: 'center' }}>
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to project ${i + 1}`}
              style={{
                width: activeIdx === i ? '16px' : '5px',
                height: '5px', borderRadius: '999px',
                background: activeIdx === i ? '#111111' : '#D1D5DB',
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'all 0.2s ease',
              }}
            />
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
