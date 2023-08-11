import { useDayNightThemeSwitcher } from '@/hooks/useDayNightThemeSwitcher'
interface MainProps {
    children: (
        currentTheme: boolean,
    ) => React.ReactNode;
}

export const MainContainer: React.FC<MainProps> = ({ children }) => {
  const { currentTheme } = useDayNightThemeSwitcher()

  return <>{children(currentTheme)}</>
}
