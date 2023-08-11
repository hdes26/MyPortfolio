import { theme } from '@/redux/features/themeSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
interface ThemeProps {
    children: (
        currentTheme: boolean,
        handleThemeChange: () => void
    ) => React.ReactNode;
}

export const ThemeContainer: React.FC<ThemeProps> = ({ children }) => {
  const currentTheme = useAppSelector(state => state.themeReducer.theme)
  const dispatch = useAppDispatch()

  const handleThemeChange = () => {
    dispatch(theme())
  }

  return <>{children(currentTheme, handleThemeChange)}</>
}
