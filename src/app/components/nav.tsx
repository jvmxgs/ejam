'use client'
import Icons from './icons'
import NavItem from './nav-item'
import React, { useState } from 'react'

export default function Nav () {
  const navigationItems = [
    { text: '30-DAY SATISFACTION GUARANTEE', icon: 'Check' },
    { text: 'Free delivery on orders over $40.00', icon: 'Truck' },
    { text: '50.000+ HAPPY CUSTOMERS', icon: 'Heart' },
    { text: '100% Money Back Guarantee', icon: 'Sync' }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleSlideLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 4) % 4)
  }

  const handleSlideRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 4)
  }

  return (
    <nav className='bg-valhalla flex justify-between sm:justify-around sm:px-16'>

      <button onClick={handleSlideLeft} className='ml-5 sm:hidden'>
        {React.createElement(Icons.ChevronLeft)}
      </button>

      {navigationItems.map((item, index) => (
        <NavItem
          key={index}
          text={item.text}
          className={`${
            index === currentIndex ? 'flex' : 'hidden sm:flex'
          }`}
        >
          {React.createElement(Icons[item.icon])}
        </NavItem>
      ))}

      <button onClick={handleSlideRight} className='mr-5 sm:hidden'>
        {React.createElement(Icons.ChevronRight)}
      </button>
    </nav>
  )
}
