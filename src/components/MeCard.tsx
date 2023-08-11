import '@/styles/components/meCard.css'
import Image from 'next/image'
import { useState } from 'react'
import { LanguageContainer, ThemeContainer } from './containers'
import { MeCardContent } from './ui'

export const MeCard: React.FC = () => {
  const [showImages, setShowImages] = useState(true)
  const imageClassName = showImages ? 'me-image-out -bottom-20 md:-bottom-full' : 'me-image-in -bottom-20 md:-bottom-32'

  const toggleImageVisibility = () => {
    setShowImages(prevShowImages => !prevShowImages)
  }

  return (
    <ThemeContainer>
      {(currentTheme) => (
        <LanguageContainer>
          {(currentLanguage) => (
            <div className={`bg-${currentTheme ? '[#1c053a9c]' : '[#af72ff56]'} relative col-span-3 aspect-square md:aspect-auto md:row-span-2 rounded-3xl overflow-hidden hover:scale-[101%]`} onMouseEnter={toggleImageVisibility} onMouseLeave={toggleImageVisibility}>
              <div className='m-auto relative w-full h-full opacity-50' />
              <Image
                src='/me.png'
                alt='Hernan Escorcia'
                priority
                height={0}
                width={0}
                sizes='full'
                className={`${imageClassName} absolute md:-right-1/4 -right-10 w-2/3 md:h-full md:auto object-cover -z-0 md:flex`}
                placeholder='blur'
                blurDataURL='/me.png'
              />
              <MeCardContent currentLanguage={currentLanguage} />
            </div>
          )}
        </LanguageContainer>
      )}
    </ThemeContainer>
  )
}
