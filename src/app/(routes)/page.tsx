'use client'

import { MeCard, Navbar } from '@/components'

export default function Home () {
  return (
    <>
      <Navbar />
      <section
        id='about-me'
        className='grid grid-cols-3 h-max gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20 z-10 fade-in-from-top'
      >
        <MeCard />
      </section>
    </>
  )
}
