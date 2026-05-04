import Image from 'next/image'
import { FadeIn, StaggerList, StaggerItem } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CalendarIcon, GraduationCapIcon, MapPinIcon } from '@/components/ui/Icons'
import { education, type Education } from '@/lib/data'

function EducationCard({ edu }: { edu: Education }) {
  return (
    <StaggerItem>
      <div className="card p-4">
        <div className="flex items-start gap-3">
          {/* Institution logo */}
          <div
            className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center"
            style={{ border: '1px solid #E8E8E8', background: '#fff' }}
          >
            <Image
              src={edu.logo}
              alt={`${edu.institution} logo`}
              width={40}
              height={40}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Degree */}
            <p style={{ fontSize: '14.5px', fontWeight: 600, color: '#111111', marginBottom: '5px' }}>
              {edu.degree}
            </p>

            {/* Meta row */}
            <div className="meta-row mb-3">
              <span className="meta-item">
                <CalendarIcon size={12} className="text-gray-400" />
                <span>{edu.period}</span>
              </span>
              <span className="meta-item">
                <GraduationCapIcon size={12} className="text-gray-400" />
                <span>{edu.institution}</span>
              </span>
              <span className="meta-item">
                <MapPinIcon size={12} className="text-gray-400" />
                <span>{edu.location}</span>
              </span>
            </div>

            {/* Description */}
            <p style={{ fontSize: '13.5px', color: '#6B7280', lineHeight: 1.65 }}>
              {edu.description}
            </p>
          </div>
        </div>
      </div>
    </StaggerItem>
  )
}

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-8">
      <FadeIn>
        <SectionLabel>Education</SectionLabel>
      </FadeIn>

      <StaggerList className="flex flex-col gap-3" stagger={0.08}>
        {education.map((edu) => (
          <EducationCard key={edu.id} edu={edu} />
        ))}
      </StaggerList>
    </section>
  )
}
