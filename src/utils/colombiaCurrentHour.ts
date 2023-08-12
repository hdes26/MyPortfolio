export const getCurrentHour = (): string => {
  const currentDate = new Date()
  const options = {
    timeZone: 'America/Bogota',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  } as Intl.DateTimeFormatOptions

  const hourFormat = new Intl.DateTimeFormat('en-US', options)
  return hourFormat.format(currentDate)
}
