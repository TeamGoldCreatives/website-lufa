import { StarIcon } from './Icons'

export function StarRating({ stars = 5 }: { stars?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${stars} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          size={15}
          className={i < stars ? 'text-amber-400' : 'text-gray-200'}
        />
      ))}
    </div>
  )
}
