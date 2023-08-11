import { LanguageContainer, SelectContainer, ThemeContainer } from './containers'

export const LanguageCard = () => {
  return (
    <SelectContainer>
      {
        (currentSelect) => (
          <ThemeContainer>
            {(currentTheme) => (
              <LanguageContainer>
                {(currentLanguage, handleLanguageChange) => (
                  <div
                    className={`bg-${currentTheme ? '[#1c053a9c]' : '[#af72ff56]'} ${currentSelect === 'home' ? 'opacity-100' : ' opacity-20'} 
                              flex flex-col justify-center items-center rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm 
                              cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out`}
                    onClick={handleLanguageChange}
                  >
                    <p className='font-semibold uppercase text-white dark:text-white text-5xl md:text-8xl'>{currentLanguage ? 'ES' : 'EN'}</p>
                    <p className='font-bold transition duration-300 ease-in-out'>
                      <span className={!currentLanguage ? 'text-purple-400' : 'text-white'}> EN </span>
                      <span className={currentLanguage ? 'text-purple-400' : 'text-white'}> ES </span>
                    </p>
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
