import { language } from '@/redux/features/languageSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
interface LanguageProps {
    children: (
      currentLanguage: boolean,
      handleLanguageChange: () => void
    ) => React.ReactNode;
  }

export const LanguageContainer: React.FC<LanguageProps> = ({ children }) => {
  const currentLanguage = useAppSelector(state => state.languageReducer.language)
  const dispatch = useAppDispatch()

  const handleLanguageChange = () => {
    dispatch(language())
  }

  return <>{children(currentLanguage, handleLanguageChange)}</>
}
