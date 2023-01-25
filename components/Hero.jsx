import Image from 'next/image'
import React from 'react'
import HeroImg from '../public/hero.png'

export default function Hero() {

  return (
    <div className="bg-slate-900">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-7xl flex flex-col justify-start md:flex-row py-24 px-8 md:pt-24 md:pb-40">

              <div className='flex flex-col justify-center text-center md:text-left md:justify-left gap-y-7 order-last md:order-1 md:max-w-2/5'>
                <h1 className="text-4xl text-orange-400 font-bold tracking-wider md:text-left sm:text-6xl uppercase">
                  Fina-Mint.
                </h1>
                <h2 className="text-2xl text-orange-100 sm:text-4xl capitalize">
                  Co-creating financial freedom, for everyone, everywhere
                </h2>
                <div className="mt-2 justify-center md:align-left">
                  <a
                    href="#"
                    className="inline-block rounded-lg bg-pink-400 px-4 py-1.5 text-base font-semibold leading-7 text-pink-50 shadow-sm ring-1 ring-pink-400 hover:bg-pink-500 hover:ring-pink-500"
                  >
                    Get started{' '}
                    <span className="text-indigo-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>

              <div className='flex  order-1 md:order-last md:max-w-3/5'>
                <Image src={HeroImg} alt=""/>
              </div>  
              
          </div>
        </div>
      </main>
    </div>
  )
}
