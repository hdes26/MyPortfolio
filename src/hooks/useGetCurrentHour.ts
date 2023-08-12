import { getCurrentHour } from '@/utils/colombiaCurrentHour'
import { useEffect, useState } from 'react'

export const useGetCurrentHour = () => {
  const [time, setTime] = useState('')
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentHour())
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return { time }
}
