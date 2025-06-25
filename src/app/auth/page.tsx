import AuthButtons from '@/components/AuthButtons'
import Image from 'next/image'
import React from 'react'

export default function Auth() {
  return (
    <div className="flex h-screen w-full">
      <div className="flex-1 flex overflow-hidden dark:bg-[#651c2b55] bg-[#651c2b] relative justify-center items-center">
        <img
          src="/redis-logo.svg"
          alt="Redis Logo" 
          className='absolute -left-1/4 opacity-25 -bottom-52 lg:scale-125 xl:scale-100 scale-[2] pointer-events-none select-none z-1' 
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center gap-4 max-w-xl w-full">
          <Image
            src="/logo.png"
            alt="RediStash Logo"
            width={763}
            height={173}
            className="w-48 md:w-60 lg:w-72 mt-10 pointer-events-none select-none" 
          />
          <p className="text-balance text-xl md:text-2xl lg:text-3xl font-semibold">
          O chat <span className="px-2 bg-red-500 font-bold text-white">DEFINITIVO</span> que
          </p>
          <p className="text-balance text-xl md:text-2xl lg:text-3xl font-semibold mb-20">
          você <span className="px-2 bg-green-500 font-bold text-white ">SEMPRE QUIS</span> usar
          </p>
          <AuthButtons />
        </div>
      </div>
      <div className="flex-1 relative overflow-hidden justify-center items-center hidden md:flex">
      <Image
            src="/hero-right.png"
            alt="Hero Image"
            fill
            className="object-cover dark:opacity-60 opacity-90 h-full pointer-events-none select-none" 
          />
      </div>
    </div>
  )
}
