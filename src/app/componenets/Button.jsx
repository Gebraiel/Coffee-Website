"use client"
import React from 'react'
import MotionComponent from './MotionComponent'

export default function Button({children,action,active}) {
  return (
    <MotionComponent as="span" props={{initial:{opacity:0},animate:{opacity:1}}}>
      <button className={`bg-[#1B1D1F] text-white text-xs sm:text-base px-5 py-3 rounded-md hover:bg-[#4D5562] transition-colors duration-300 cursor-pointer ${active&&'bg-[#4D5562]'}`} onClick={action}>{children}</button>
    </MotionComponent>
  )
}
