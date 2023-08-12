import useSWR from 'swr'
import { getWeather, weatherUrl } from '@/services/weather'
import { getCurrentHour } from '@/utils/colombiaCurrentHour'
import Image from 'next/image'

import styles from '@/styles/components/timeCard.module.css'
import { useEffect, useState } from 'react'

export const NightComponent: React.FC = () => {
  const [time, setTime] = useState('')
  const { data, isLoading } = useSWR(weatherUrl, getWeather)

  const temp = data?.main.temp.toFixed() || ''
  const ski = data?.weather[0].main || ''
  const country = data?.sys.country || ''
  const city = data?.name || ''
  const icon = data?.weather[0]?.icon || ''

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentHour())
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className='bg-[#001324] w-full flex overflow-hidden bg-clip-padding text-white py-2 px-4 lg:p-8'>
      <div className='flex flex-col justify-center lg:h-full w-2/3 absolute lg:static z-10'>
        <div className='flex items-center'>
          <p className='text-lg md:text-5xl lg:text-7xl font-bold'>
            {temp + '°'}
          </p>
          {!isLoading &&
            <Image
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              width={100}
              height={100}
              className='w-5 h-5 lg:w-20 lg:h-20'
              draggable='false'
              alt=''
              placeholder='blur'
              blurDataURL={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            />}
        </div>
        <p className='capitalize text-xs md:text-xl lg:text-2xl font-semibold lg:mb-0'>
          {ski}
        </p>
        <p className='text-xs md:text-md lg:text-xl'>{time}</p>
        <p className='text-xs md:text-md lg:text-xl'>
          {city + ', ' + country}
        </p>
      </div>
      <div className='absolute right-0 top-0 flex justify-end pr-5 z-0 items-center w-full h-full overflow-hidden'>
        <Moon />
      </div>
    </div>
  )
}

function Moon () {
  return (
    <div
      className={`${styles.night} ${styles.container} w-20 h-20 lg:w-56 lg:h-56 right-5`}
    >
      <span className={`${styles.moon} w-10 h-10 lg:w-24 lg:h-24`} />
      <span className={styles.spot1} />
      <span className={styles.spot2} />
      <ul>
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
  )
}
