import { isDayColombia } from '@/utils'
import { useEffect, useState } from 'react'

export const useGetIsDayColombia = () => {
  const [isDay, setIsDay] = useState(false)
  useEffect(() => {
    setIsDay(isDayColombia())
  }, [])
  return { isDay }
}
