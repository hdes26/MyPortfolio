const clientId: string = process.env.NEXT_SPOTIFY_CLIENT_ID as string
const clientSecret: string = process.env.NEXT_SPOTIFY_CLIENT_SECRET as string
const refreshToken: string = process.env.NEXT_SPOTIFY_REFRESH_TOKEN as string

const basic: string = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
const recentlyPlayedEndpoint: string = 'https://api.spotify.com/v1/me/player/recently-played?limit=1'
const tokenEndpoint = 'https://accounts.spotify.com/api/token'

const getAccessToken = async () => {
  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    })
  })
  return response.json()
}

export const getRecentlyPlayed = async () => {
  const { access_token: accessToken } = await getAccessToken()
  return fetch(recentlyPlayedEndpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}
