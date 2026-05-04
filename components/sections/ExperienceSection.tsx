import Image from 'next/image'
import { FadeIn, StaggerList, StaggerItem } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CalendarIcon, BuildingIcon, MapPinIcon } from '@/components/ui/Icons'
import { experience, type Experience } from '@/lib/data'

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <StaggerItem>
      <div className="card p-4">
        <div className="flex items-start gap-3">
          {/* Company logo */}
          <div
            className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center"
            style={{ border: '1px solid #E8E8E8', background: '#fff' }}
          >
            <Image
              src={exp.logo}
              alt={`${exp.company} logo`}
              width={40}
              height={40}
              className="w-full h-full object-contain p-1"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Role */}
            <p style={{ fontSize: '14.5px', fontWeight: 600, color: '#111111', marginBottom: '5px' }}>
              {exp.role}
            </p>

            {/* Meta row */}
            <div className="meta-row mb-3">
              <span className="meta-item">
                <CalendarIcon size={12} className="text-gray-400" />
                <span>{exp.period}</span>
              </span>
              <span className="meta-item">
                <BuildingIcon size={12} className="text-gray-400" />
                <span>{exp.company}</span>
              </span>
              <span className="meta-item">
                <MapPinIcon size={12} className="text-gray-400" />
                <span>{exp.location}</span>
              </span>
            </div>

            {/* Description */}
            <p style={{ fontSize: '13.5px', color: '#6B7280', lineHeight: 1.65 }}>
              {exp.description}
            </p>
          </div>
        </div>
      </div>
    </StaggerItem>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-8">
      <FadeIn>
        <SectionLabel>Experience</SectionLabel>
      </FadeIn>

      <StaggerList className="flex flex-col gap-3" stagger={0.07}>
        {experience.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </StaggerList>
    </section>
  )
}
