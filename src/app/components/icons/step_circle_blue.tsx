export default function StepCircleBlue ({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <svg width="41" height="40" className={ className } viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20.3333" cy="20" r="19" fill="#2C7EF8" stroke="#2C7EF8" strokeWidth="2"/>
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" className='leading-[22px] text-xl font-normal'>
        { children }
      </text>
    </svg>
  )
}
