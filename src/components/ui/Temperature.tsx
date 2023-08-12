import React from 'react'
import Image from 'next/image'
import useSWR from 'swr'
import { getCurrentHour } from '@/utils/colombiaCurrentHour'
import { getWeather, weatherUrl } from '@/services/weather'

interface TemperatureProps {}

export const Temperature: React.FC<TemperatureProps> = () => {
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
    <div className='flex-col justify-center lg:h-full w-2/3 absolute lg:static z-10 flex'>
      <div className='flex items-center'>
        <p className='text-lg md:text-6xl lg:text-7xl font-bold'>{temp}°</p>
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
    </div>
  )
}
