export const calculateAge = (birthdate: Date): number => {
  const currentDate = new Date()
  let age = currentDate.getFullYear() - birthdate.getFullYear()

  if (
    birthdate.getMonth() > currentDate.getMonth() ||
      (birthdate.getMonth() === currentDate.getMonth() &&
        birthdate.getDate() > currentDate.getDate())
  ) {
    age--
  }

  return age
}
