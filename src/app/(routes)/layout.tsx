'use client'
import { MainContainer } from '@/components/containers'

export default function HomeLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (

    <MainContainer>
      {
        (currentTheme) => (
          <main className={`${currentTheme ? 'bg-[#f7f2f2]' : 'bg-gray-800'} flex w-full h-full flex-col p-5 -z-10`}>
            {children}
          </main>
        )
      }
    </MainContainer>
  )
}
