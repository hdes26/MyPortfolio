import { LanguageContainer, SelectContainer } from './containers'
import { useGetAge } from '@/hooks/useGetAge'

export const AgeCard: React.FC = () => {
  const { age } = useGetAge()
  return (
    <SelectContainer>
      {
        (currentSelect) => (
          <LanguageContainer>
            {
        (currentLanguage) => (
          <div className={`${currentSelect === 'home' || currentSelect === 'about' ? 'opacity-100' : ' opacity-20'} text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm bg-[#ff4848d3] p-4 justify-center items-center`}>
            <div className='flex justify-center items-center flex-col'>
              <p className='text-xs md:text-lg uppercase font'>{currentLanguage ? 'edad' : 'age'}</p>
              <p className='text-4xl md:text-8xl font-bold'>{age}</p>
              <p className='text-xs md:text-xl uppercase font-semibold text-center'>{currentLanguage ? 'años' : 'years old'}</p>
            </div>
          </div>
        )
      }
          </LanguageContainer>
        )
      }
    </SelectContainer>

  )
}
