import { LanguageContainer, SelectContainer, ThemeContainer } from './containers'

export const Navbar: React.FC = () => {
  return (
    <SelectContainer>
      {(currentSelect, handleHomeChange, handleAboutChange, handleContactChange) => (
        <ThemeContainer>
          {(currentTheme) => (
            <LanguageContainer>
              {(currentLanguage) => (
                <nav className='flex w-full justify-center'>
                  <div
                    className={`flex items-center justify-center rounded-full ${currentTheme ? 'bg-white' : 'bg-gray-900'}
                               text-gray-500 font-semibold py-1 px-4 space-x-4 focus:outline-none`}
                  >
                    <button
                      onClick={handleHomeChange}
                      className={`${currentSelect === 'home' && (currentTheme ? 'bg-gray-100' : 'bg-gray-800')} 
                                ${currentTheme ? 'hover:bg-gray-100' : 'hover:bg-gray-800'} transition rounded-3xl p-2`}
                    >
                      {currentLanguage ? 'Inicio' : 'Home'}
                    </button>
                    <button
                      onClick={handleAboutChange}
                      className={`${currentSelect === 'about' && (currentTheme ? 'bg-gray-100' : 'bg-gray-800')}
                       ${currentTheme ? 'hover:bg-gray-100' : 'hover:bg-gray-800'} transition rounded-3xl p-2`}
                    >
                      {currentLanguage ? 'Sobre mi' : 'About'}
                    </button>
                    <button
                      onClick={handleContactChange}
                      className={`${currentSelect === 'contact' && (currentTheme ? 'bg-gray-100' : 'bg-gray-800')}
                       ${currentTheme ? 'hover:bg-gray-100' : 'hover:bg-gray-800'} transition rounded-3xl p-2`}
                    >
                      {currentLanguage ? 'Contacto' : 'Contact'}
                    </button>
                  </div>
                </nav>
              )}
            </LanguageContainer>
          )}
        </ThemeContainer>
      )}
    </SelectContainer>
  )
}
