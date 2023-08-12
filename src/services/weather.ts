export const weatherUrl = '/api/weather'

export const getWeather = async (url:string) => {
  return fetch(url, { cache: 'no-store' }).then(res => res.json())
}
