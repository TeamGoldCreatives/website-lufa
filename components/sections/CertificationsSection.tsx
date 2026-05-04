import Image from 'next/image'
import { FadeIn, StaggerList, StaggerItem } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { certifications, type Certification } from '@/lib/data'

function CertCard({ cert }: { cert: Certification }) {
  return (
    <StaggerItem>
      <div className="card p-4">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div
            className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
            style={{ border: '1px solid #E8E8E8' }}
          >
            <Image
              src={cert.logo}
              alt={`${cert.name} badge`}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name + issued */}
          <div>
            <p style={{ fontSize: '14.5px', fontWeight: 600, color: '#111111', marginBottom: '1px' }}>
              {cert.name}
            </p>
            <p style={{ fontSize: '13px', color: '#9CA3AF' }}>{cert.issued}</p>
          </div>
        </div>
      </div>
    </StaggerItem>
  )
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-8">
      <FadeIn>
        <SectionLabel>License &amp; Certification</SectionLabel>
      </FadeIn>

      <StaggerList className="flex flex-col gap-3" stagger={0.07}>
        {certifications.map((cert) => (
          <CertCard key={cert.id} cert={cert} />
        ))}
      </StaggerList>
    </section>
  )
}
