import { LanguageContainer, SelectContainer } from './containers'

export const EnglishCard: React.FC = () => {
  return (
    <SelectContainer>
      {
        (currentSelect) => (
          <LanguageContainer>
            {(currentLanguage) => (
              <a
                aria-label='tomyenglishcertificate'
                href='https://www.efset.org/cert/Phk2Nf'
                target='_blank'
                rel='noopener noreferrer'
                className={`${currentSelect === 'home' || currentSelect === 'about' ? 'opacity-100' : ' opacity-20'}  text-white relative rounded-3xl flex overflow-hidden aspect-square shadow-sm bg-[#2ab9adb9] 
                            p-4 justify-center items-center hover:scale-[103%] transition duration-500 ease-in-out cursor-pointer`}
              >
                <svg
                  aria-label='redirectrow'
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 24 24'
                  className='absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white dark:text-[#ffffffaa]'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z' />
                </svg>
                <div>
                  <div className='flex justify-center items-center flex-col'>
                    <p className='text-xs hidden md:block md:text-lg text-center uppercase font-base'>{currentLanguage ? 'Nivel de ingles' : 'English level'}</p>
                    <p className='text-4xl md:text-9xl font-bold'>B1</p>
                    <p className='text-xs md:text-xl uppercase font-semibold text-center'>EF SET</p>
                  </div>
                </div>
              </a>
            )}
          </LanguageContainer>
        )
      }
    </SelectContainer>
  )
}
