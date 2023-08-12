import Image from 'next/image'
import { LanguageContainer, ThemeContainer } from './containers'
import { ProjectCardContent } from './ui'
import { SelectContainer } from './containers/SelectContainer'
import codingOne from '@/assets/coding.gif'
import codingTwo from '@/assets/coding2.gif'
export const ProjectCard = () => {
  return (
    <SelectContainer>
      {
        (currentSelect) => (
          <ThemeContainer>
            {
            (currentTheme) => (
              <LanguageContainer>
                {
                  (currentLanguage) => (
                    <a
                      href='/projects' className={`${currentTheme ? 'bg-[#0a9cb2]' : 'bg-[#af72ff56]'} 
                      ${currentSelect === 'home' || currentSelect === 'about' ? 'opacity-100' : ' opacity-20'} 
                      relative rounded-3xl col-span-2 md:aspect-auto overflow-hidden hover:scale-[103%] transition duration-500 ease-in-out`}
                    >
                      <svg
                        aria-label='redirectrow'
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 16 16'
                        className='absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-white dark:text-[#ffffffaa] z-10 text-4xl' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'
                      ><path fillRule='evenodd' d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z' />
                      </svg>
                      <ProjectCardContent currentLanguage={currentLanguage} />
                      <div className='w-full h-full bg-[#1c053a9c] dark:bg-[#af72ff56] absolute'>
                        <Image
                          src={currentTheme ? codingTwo : codingOne}
                          width={0}
                          height={0}
                          alt='coding'
                          priority
                          className='w-full h-full object-cover opacity-40'
                        />
                      </div>
                    </a>
                  )
                }
              </LanguageContainer>
            )
          }
          </ThemeContainer>
        )
      }
    </SelectContainer>

  )
}
