export default function StepCircleBlueLight ({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <svg width="40" height="40" className={ className } viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="19" stroke="#2C7EF8" strokeWidth="2"/>
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#2C7EF8" className='leading-[22px] text-xl font-normal'>
        { children }
      </text>
    </svg>
  )
}
