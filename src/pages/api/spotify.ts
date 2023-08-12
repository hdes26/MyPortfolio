import SpotifyWebApi from 'spotify-web-api-node'
import { NextApiRequest, NextApiResponse } from 'next'

const api = new SpotifyWebApi({
  clientId: process.env.NEXT_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.NEXT_SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.NEXT_SPOTIFY_REDIRECT
})

const handler = async (req:NextApiRequest, res:NextApiResponse) => {
  try {
    api.setRefreshToken(process.env.NEXT_SPOTIFY_REFRESH_TOKEN as string)
    const data = await api.refreshAccessToken()
    api.setAccessToken(data.body.access_token)
    const recentTracks = await api.getMyRecentlyPlayedTracks({
      limit: 1
    })
    res.status(200).json(recentTracks.body.items[0].track)
  } catch (error) {
    console.error(error)
  }
}

export default handler
