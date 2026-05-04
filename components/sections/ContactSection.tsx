import Link from 'next/link'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { contactLinks } from '@/lib/data'

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-8">
      <FadeIn>
        <SectionLabel>Contact</SectionLabel>
      </FadeIn>

      <FadeIn delay={0.05}>
        {/* Contact rows — label/value table matching the original */}
        <div>
          {contactLinks.map((link, i) => (
            <div key={i} className="contact-row">
              <span style={{ fontSize: '14.5px', color: '#111111', fontWeight: 400 }}>
                {link.label}
              </span>
              <Link
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{ fontSize: '14.5px', color: '#6B7280' }}
                className="hover:text-gray-900 transition-colors duration-150"
              >
                {link.value}
              </Link>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Footer */}
      <FadeIn delay={0.12}>
        <div className="mt-10 pt-6 flex flex-col gap-1.5" style={{ borderTop: '1px solid #F2F2F2' }}>
          <Link
            href="https://framer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
            style={{ fontSize: '14px', color: '#9CA3AF' }}
          >
            Built using Framer
          </Link>
          <Link
            href="#"
            className="hover:text-gray-700 transition-colors"
            style={{ fontSize: '14px', color: '#9CA3AF' }}
          >
            Buy this template
          </Link>
          <Link
            href="#"
            className="hover:text-gray-700 transition-colors"
            style={{ fontSize: '14px', color: '#9CA3AF' }}
          >
            Become an affiliate
          </Link>
          <p style={{ fontSize: '14px', color: '#BBBBBB', marginTop: '6px' }}>
            © 2026 Resumx by Jus
          </p>
        </div>
      </FadeIn>
    </section>
  )
}
