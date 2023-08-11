import { dayTheme, nightTheme } from '@/redux/features/themeSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { isDayColombia } from '@/utils'
import { useEffect } from 'react'

export const useDayNightThemeSwitcher = () => {
  const currentTheme: boolean = useAppSelector(state => state.themeReducer.theme)
  const isDay = isDayColombia()
  const dispatch = useAppDispatch()
  useEffect(() => {
    isDay ? dispatch(dayTheme()) : dispatch(nightTheme())
  }, [isDay, dispatch])
  return { currentTheme }
}
