export const calculateYearsOfExperience = () => {
  const startDateOfWork = new Date('2022-01-11')
  const currentDate = new Date()
  const yearsOfExperience = currentDate.getFullYear() - startDateOfWork.getFullYear()
  return yearsOfExperience.toString()
}
