import { calculateYearsOfExperience } from '@/utils/yearsOfExperience'
import { SelectContainer } from './containers'

export const ExperienceCard: React.FC = () => {
  const yearsOfExperience = calculateYearsOfExperience()
  return (
    <SelectContainer>
      {
        (currentSelect) => (
          <div
            aria-label='yearsofexperience'
            className={`${currentSelect === 'home' || currentSelect === 'about' ? 'opacity-100' : ' opacity-20'} text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm bg-blue-400/80 p-4 justify-center items-center`}
          >
            <div className='flex justify-center items-center flex-col'>
              <p className='text-4xl md:text-8xl font-bold'>{'+' + yearsOfExperience}</p>
              <p className='text-xs md:text-xl uppercase font-semibold text-center'>years of experience</p>
            </div>
          </div>
        )
      }
    </SelectContainer>

  )
}
