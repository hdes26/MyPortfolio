import '@/styles/components/weatherCard.css'
import { isDayColombia } from '@/utils'
import { Temperature, WeatherCardContent } from './ui'
import { SelectContainer } from './containers'
export const WeatherCard: React.FC = () => {
  const isDay = isDayColombia()
  return (

    <SelectContainer>
      {
        (currentSelect) => (

          <div className={`${currentSelect === 'home' || currentSelect === 'about' ? 'opacity-100' : ' opacity-20'} rounded-3xl flex relative overflow-hidden col-span-2`}>

            <div className={`${isDay ? 'bg-[#089cffa4]' : 'bg-[#001324]'} w-full flex overflow-hidden bg-clip-padding text-white py-2 px-4 md:p-4 lg:p-8 transition-all duration-500 ease-in-out`}>
              <Temperature />
              <WeatherCardContent isDay={isDay} />
            </div>

          </div>
        )
      }
    </SelectContainer>

  )
}
