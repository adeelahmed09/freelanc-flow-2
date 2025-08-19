"use client"
import React from 'react'

function Loader({loading}) {
  return (
    <div style={{display: `${loading?"flex":"none"}`}} className='w-full h-full flex  backdrop-blur-sm  bg-transparent bg-  absolute items-center justify-center'>
      <div  className='w-16 h-16 rounded-full border-8 bg-transparent border-gray-400 border-t-blue-600 animate-spin'>

      </div>
    </div>
  )
}

export default Loader