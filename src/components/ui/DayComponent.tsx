import useSWR from 'swr'
import { getWeather, weatherUrl } from '@/services/weather'
import { getCurrentHour } from '@/utils/colombiaCurrentHour'
import Image from 'next/image'

import styles from '@/styles/components/timeCard.module.css'

export const DayComponent: React.FC = () => {
  const currentHour = getCurrentHour()
  const { data, isLoading, error } = useSWR(weatherUrl, getWeather)
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Some error occurred</p>

  const temp = data?.main.temp.toFixed()
  const ski = data?.weather[0].main || ''
  const country = data?.sys.country || ''
  const city = data?.name || ''
  const icon = data?.weather[0].icon || ''

  return (
    <div className='bg-[#089cffa4] w-full flex overflow-hidden bg-clip-padding text-white py-2 px-4 md:p-4 lg:p-8 transition-all duration-500 ease-in-out'>
      <div className={`flex-col justify-center lg:h-full w-2/3 absolute lg:static z-10 ${isLoading ? 'hidden' : 'flex'}`}>
        <div className='flex items-center'>
          <p className='text-lg md:text-6xl lg:text-7xl font-bold'>{temp + '°'}</p>
          {!isLoading && (
            <Image
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt='cloud'
              height={0}
              width={0}
              sizes='full'
              className='w-5 h-5 md:w-10 md:h-10 lg:w-20 lg:h-20 text-transparent'
              placeholder='blur'
              blurDataURL={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            />
          )}
        </div>
        <p className='capitalize text-xs md:text-2xl lg:text-2xl font-semibold lg:mb-0'>{ski}</p>
        <p className='text-xs md:text-lg lg:text-xl'>{currentHour}</p>
        <p className='text-xs md:text-lg lg:text-xl'>{`${city}, ${country}`}</p>
        <Sun />
      </div>
    </div>

  )
}

function Sun () {
  return (
    <div
      className={`${styles.hot} ${styles.container} w-20 h-20 md:w-56 md:h-56 right-5`}
    >
      <span className={`${styles.sun} w-10 h-10 md:w-24 md:h-24`} />
      <span className={styles.sunx} />
    </div>
  )
}
