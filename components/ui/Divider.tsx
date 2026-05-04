/**
 * Divider — 1px horizontal rule separating resume sections.
 * Matches the subtle section breaks visible in the original Framer design.
 */
export function Divider() {
  return (
    <hr
      style={{
        border: 'none',
        borderTop: '1px solid #F0F0F0',
        margin: 0,
      }}
      aria-hidden="true"
    />
  )
}
