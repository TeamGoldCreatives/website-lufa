import { Sidebar } from '@/components/layout/Sidebar'
import { BottomNav } from '@/components/layout/BottomNav'
import { Divider } from '@/components/ui/Divider'
import { IntroSection } from '@/components/sections/IntroSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Page() {
  return (
    <>
      {/*
        ── Layout ─────────────────────────────────────────────────────────────
        Two-column layout matching the original Framer design:
          • LEFT : sticky sidebar (~280px) — profile, contact, skills, social
          • RIGHT: single scrollable column — all resume sections separated
                   by thin 1px dividers, no tabs or pagination
          • Gap  : ~80px on desktop, stacked single-column on mobile/tablet
        ───────────────────────────────────────────────────────────────────────
      */}
      <div className="min-h-screen" style={{ background: '#FFFFFF' }}>
        <div
          className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10"
          style={{ paddingTop: '40px', paddingBottom: '120px' }}
        >
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20">

            {/* ── Sticky sidebar ── */}
            <Sidebar />

            {/* ── Single scrollable column — all sections in one flow ── */}
            <main className="flex-1 min-w-0 flex flex-col gap-0">

              <div className="py-10 lg:py-12">
                <IntroSection />
              </div>

              <Divider />

              <div className="py-10 lg:py-12">
                <ProjectsSection />
              </div>

              <Divider />

              <div className="py-10 lg:py-12">
                <ExperienceSection />
              </div>

              <Divider />

              <div className="py-10 lg:py-12">
                <EducationSection />
              </div>

              <Divider />

              <div className="py-10 lg:py-12">
                <CertificationsSection />
              </div>

              <Divider />

              <div className="py-10 lg:py-12">
                <TestimonialsSection />
              </div>

              <Divider />

              <div className="py-10 lg:py-12">
                <ContactSection />
              </div>

            </main>
          </div>
        </div>
      </div>

      {/* Floating bottom dock — scroll-aware section navigator */}
      <BottomNav />
    </>
  )
}
