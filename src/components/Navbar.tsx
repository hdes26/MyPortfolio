import { useAppDispatch } from '@/redux/hooks'
import { LanguageContainer, ThemeContainer } from './containers'
import { selectHome, selectAbout, selectContact } from '@/redux/features/navbarSlice'

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch()
  const handleHomeChange = () => {
    dispatch(selectHome())
  }
  const handleAboutChange = () => {
    dispatch(selectAbout())
  }
  const handleContactChange = () => {
    dispatch(selectContact())
  }

  return (
    <ThemeContainer>
      {
        (currentTheme) => (
          <LanguageContainer>
            {
              (currentLanguage) => (
                <nav className='flex w-full justify-center'>
                  <div className={`flex items-center justify-center rounded-full ${currentTheme ? 'bg-white ' : 'bg-gray-900'} text-gray-500 font-semibold py-1 px-4 space-x-4 focus:outline-none`}>
                    <button onClick={handleHomeChange} className={`transition rounded-3xl p-2 ${currentTheme ? 'hover:bg-gray-100' : 'hover:bg-gray-800'} focus:outline-none`}>
                      {currentLanguage ? 'Inicio' : 'Home'}
                    </button>
                    <button onClick={handleAboutChange} className={`transition rounded-3xl p-2 ${currentTheme ? 'hover:bg-gray-100' : 'hover:bg-gray-800'} focus:outline-none`}>
                      {currentLanguage ? 'Sobre mi' : 'About'}
                    </button>
                    <button onClick={handleContactChange} className={`transition rounded-3xl p-2 ${currentTheme ? 'hover:bg-gray-100' : 'hover:bg-gray-800'} focus:outline-none`}>
                      {currentLanguage ? 'Contacto' : 'Contact'}
                    </button>
                  </div>
                </nav>

              )
            }
          </LanguageContainer>
        )
      }
    </ThemeContainer>
  )
}
