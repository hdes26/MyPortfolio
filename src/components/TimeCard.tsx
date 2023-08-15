import { DayComponent, NightComponent } from './ui'
import { SelectContainer } from './containers'
import { useGetIsDayColombia } from '@/hooks/useGetIsDayColombia'

export const TimeCard: React.FC = () => {
  const { isDay } = useGetIsDayColombia()
  return (

    <SelectContainer>
      {
        (currentSelect) => (

          <div className={`${currentSelect === 'home' || currentSelect === 'about' ? 'opacity-100' : ' opacity-20'} rounded-3xl flex relative overflow-hidden col-span-2`}>

            {
                isDay
                  ? <DayComponent />
                  : <NightComponent />
            }
          </div>
        )
      }
    </SelectContainer>

  )
}
