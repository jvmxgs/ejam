export default function Step ({
  children,
  textSm,
  text
}: {
  children: React.ReactNode
  textSm: string
  text: string
}) {
  return (
    <li className='flex flex-col sm:flex-row items-center gap-2 sm:gap-5 sm:justify-between'>
      <span>{ children }</span>
      <span className='capitalize text-xl leading-[22px] not-italic font-normal hidden sm:block'>{ textSm }</span>
      <span className='capitalize text-xs leading-[22px] not-italic font-normal block sm:hidden'>{ text }</span>
    </li>
  )
}
