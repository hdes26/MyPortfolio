export const weatherUrl = '/api/weather'

export const getWeather = async (url:string) => {
  return fetch(url).then(res => res.json())
}
