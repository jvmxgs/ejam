import McAfee from './components/icons/mcafee'
import Norton from './components/icons/norton'
import Image from 'next/image'
import Nav from './components/nav'
import React from 'react'

export default function Home () {
  return (
    <main className='flex flex-col items-center h-screen'>
      <Nav />
      <section className='w-full max-w-[1245px] sm:h-[66px] flex justify-between items-end py-5 sm:py-0 px-5 xl:px-0'>
        <Image
          src='./clarifion-logo.png'
          alt=''
          width="0"
          height="0"
          className="w-[106px] h-[20px] sm:w-[196px] sm:h-[36px]"
        />
        <div className='flex gap-4 md:gap-8'>
          <McAfee className='w-[44px] h-[16px] sm:w-[88px] sm:h-[32px]' />
          <Norton className='w-[44px] h-[16px] sm:w-[88px] sm:h-[32px]' />
        </div>
      </section>
    </main>
  )
}
