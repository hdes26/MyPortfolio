import '@/styles/components/themeCard.css'
import { Toggle } from './ui/Toggle'
import { SelectContainer, ThemeContainer } from './containers'

export const ThemeCard: React.FC = () => {
  return (
    <SelectContainer>
      {
        (currentSelect) => (

          <ThemeContainer>
            {(currentTheme, handleThemeChange) => (
              <div className={`bg-${currentTheme ? '[#1c053a9c]' : '[#af72ff56]'} ${currentSelect === 'home' ? 'opacity-100' : ' opacity-20'}
                               flex justify-center items-center  rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm`}
              >
                <div className='ThemeCard_checkbox-wrapper-5__30E_2'>
                  <div className='ThemeCard_check__UYQD9'>
                    <Toggle toggled={currentTheme} onClick={handleThemeChange} />
                  </div>
                </div>
              </div>
            )}
          </ThemeContainer>
        )
      }
    </SelectContainer>

  )
}
