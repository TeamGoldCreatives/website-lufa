import Image from 'next/image'
import { FadeIn, StaggerList, StaggerItem } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { StarRating } from '@/components/ui/StarRating'
import { testimonials, type Testimonial } from '@/lib/data'

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <StaggerItem>
      <div className="card p-5">
        {/* Author row */}
        <div className="flex items-start gap-3 mb-4">
          {/* Avatar with company logo overlay */}
          <div className="relative flex-shrink-0">
            <div
              className="w-11 h-11 rounded-full overflow-hidden"
              style={{ border: '2px solid #E8E8E8' }}
            >
              <Image
                src={t.avatar}
                alt={t.name}
                width={44}
                height={44}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Company logo badge */}
            <div
              className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full overflow-hidden"
              style={{ border: '1.5px solid #fff', background: '#fff' }}
            >
              <Image
                src={t.companyLogo}
                alt="Company logo"
                width={20}
                height={20}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Name + title */}
          <div className="min-w-0">
            <p style={{ fontSize: '14px', fontWeight: 600, color: '#111111', marginBottom: '1px' }}>
              {t.name}
            </p>
            <p style={{ fontSize: '12.5px', color: '#9CA3AF', lineHeight: 1.4 }}>
              {t.title}
            </p>
          </div>
        </div>

        {/* Stars */}
        <div className="mb-3">
          <StarRating stars={t.stars} />
        </div>

        {/* Quote */}
        <p style={{ fontSize: '13.5px', color: '#374151', lineHeight: 1.7 }}>
          {t.quote}
        </p>
      </div>
    </StaggerItem>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-8">
      <FadeIn>
        <SectionLabel>Testimonials</SectionLabel>
      </FadeIn>

      <StaggerList className="flex flex-col gap-3" stagger={0.08}>
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} t={t} />
        ))}
      </StaggerList>
    </section>
  )
}
