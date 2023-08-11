export const getCurrentHour = (): string => {
  const currentDate = new Date()
  const options = {
    timeZone: 'America/Bogota',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  } as Intl.DateTimeFormatOptions

  const hourFormat = new Intl.DateTimeFormat('es-CO', options)
  return hourFormat.format(currentDate)
}
