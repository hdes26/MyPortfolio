import { useAppSelector } from '@/redux/hooks'
interface SelectProps {
    children: (
        currentSelect: string,
    ) => React.ReactNode;
}

export const SelectContainer: React.FC<SelectProps> = ({ children }) => {
  const currentSelect = useAppSelector(state => state.navbarReducer.selectedSection)
  return <>{children(currentSelect)}</>
}
