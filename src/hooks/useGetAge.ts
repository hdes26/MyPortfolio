import { calculateAge } from '@/utils'
import { useEffect, useState } from 'react'

export const useGetAge = () => {
  const [age, setAge] = useState(0)
  useEffect(() => {
    setAge(calculateAge(new Date('2000-09-26')))
  }, [])
  return { age }
}
