export default function TickCircle ({ className }: { className?: string }) {
  return (
    <svg width="40" height="40" className={ className } viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="19" fill="#85BF55" stroke="#85BF55" strokeWidth="2" />
      <path d="M9.999985 20.000028L16.658805 27.000028L29.999015 13.000028" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
