import { DateTime } from 'luxon'

export function isDayColombia (): boolean {
  const currentHour = DateTime.now().setZone('America/Bogota')
  const hour = currentHour.hour

  const isDay = hour >= 6 && hour < 18
  return isDay
}
