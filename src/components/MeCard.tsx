import { useState } from 'react'
import Image from 'next/image'
import { LanguageContainer, SelectContainer, ThemeContainer } from './containers'
import { MeCardContent } from './ui'
import styles from '@/styles/components/meCard.module.css'
import meImg from '@/assets/me.png'

export const MeCard: React.FC = () => {
  const [showImages, setShowImages] = useState(true)
  const toggleImageVisibility = () => {
    setShowImages(prevShowImages => !prevShowImages)
  }

  return (
    <SelectContainer>
      {
        (currentSelect) => (
          <ThemeContainer>
            {(currentTheme) => (
              <LanguageContainer>
                {(currentLanguage) => (
                  <div
                    className={`bg-${currentTheme ? '[#1c053a9c]' : '[#af72ff56]'} ${currentSelect === 'home' || currentSelect === 'about' ? 'opacity-100' : ' opacity-20'}
                     relative col-span-3 aspect-square md:aspect-auto md:row-span-2 rounded-3xl overflow-hidden hover:scale-[101%]`}
                    onMouseEnter={toggleImageVisibility} onMouseLeave={toggleImageVisibility}
                  >
                    <div className='m-auto relative w-full h-full opacity-50' />
                    <Image
                      src={meImg}
                      alt='Hernan Escorcia'
                      priority
                      height={0}
                      width={0}
                      sizes='full'
                      className={`${showImages ? styles.onMouseLeave : styles.onMouseEnter} 
                                  absolute md:-right-1/4 -right-10 w-2/3 md:h-full md:auto object-cover -z-0 md:flex`}
                    />
                    <MeCardContent currentLanguage={currentLanguage} />
                  </div>
                )}
              </LanguageContainer>
            )}
          </ThemeContainer>
        )
      }
    </SelectContainer>

  )
}
