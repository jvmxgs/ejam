export default function NavItem ({
  children, text, className
}: {
  children: React.ReactNode
  text: string
  className: string
}) {
  return (
    <p className={`items-center mt-[15px] mb-[13px] gap-2 ${className}`}>
      <span className="flex-shrink-0">{ children }</span>
      <span className='font-medium text-xs text-white uppercase'>{ text }</span>
    </p>
  )
}
