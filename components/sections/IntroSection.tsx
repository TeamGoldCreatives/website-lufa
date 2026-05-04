import { FadeIn } from '@/components/ui/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { intro } from '@/lib/data'

export function IntroSection() {
  const paragraphs = intro.split('\n\n').filter(Boolean)

  return (
    <section id="intro" className="scroll-mt-8">
      <FadeIn>
        <SectionLabel>Intro</SectionLabel>
      </FadeIn>

      <div className="flex flex-col gap-5">
        {paragraphs.map((para, i) => (
          <FadeIn key={i} delay={0.05 + i * 0.08}>
            <p style={{ fontSize: '15px', color: '#111111', lineHeight: 1.7 }}>
              {para}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
