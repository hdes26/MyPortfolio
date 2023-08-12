export const recentlyPlayedUrl = '/api/spotify'

export const getRecentlyPlayed = async (url:string) => {
  return fetch(url).then(res => res.json())
}
