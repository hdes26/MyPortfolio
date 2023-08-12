import { selectAbout, selectContact, selectHome } from '@/redux/features/navbarSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
interface SelectProps {
    children: (
        currentSelect: string,
        handleHomeChange: () => void,
        handleAboutChange: () => void,
        handleContactChange: () => void,
    ) => React.ReactNode;
}

export const SelectContainer: React.FC<SelectProps> = ({ children }) => {
  const dispatch = useAppDispatch()
  const currentSelect = useAppSelector(state => state.navbarReducer.selectedSection)
  const handleHomeChange = () => {
    dispatch(selectHome())
  }
  const handleAboutChange = () => {
    dispatch(selectAbout())
  }
  const handleContactChange = () => {
    dispatch(selectContact())
  }
  return <>{children(currentSelect, handleHomeChange, handleAboutChange, handleContactChange)}</>
}
