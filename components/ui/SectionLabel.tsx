import { cn } from '@/lib/utils'

interface SectionLabelProps {
  id?: string
  children: string
  className?: string
}

/**
 * SectionLabel — small uppercase gray label above each section.
 * Matches the "INTRO", "PROJECTS", "EXPERIENCE" labels in the original.
 */
export function SectionLabel({ id, children, className }: SectionLabelProps) {
  return (
    <span id={id} className={cn('section-label', className)}>
      {children}
    </span>
  )
}
