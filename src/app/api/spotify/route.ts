import SpotifyWebApi from 'spotify-web-api-node'
import { NextResponse } from 'next/server'

const api = new SpotifyWebApi({
  clientId: process.env.NEXT_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.NEXT_SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.NEXT_SPOTIFY_REDIRECT
})

export async function GET () {
  api.setRefreshToken(process.env.NEXT_SPOTIFY_REFRESH_TOKEN as string)
  const data = await api.refreshAccessToken()
  api.setAccessToken(data.body.access_token)
  const recentTracks = await api.getMyRecentlyPlayedTracks({
    limit: 1
  })
  return NextResponse.json(recentTracks.body.items[0].track)
}
