export const recentlyPlayedUrl = '/api/spotify'

export const getRecentlyPlayed = async (url:string) => {
  return fetch(url, { cache: 'no-store' }).then(res => res.json())
}
