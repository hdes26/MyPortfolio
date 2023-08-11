import { Data } from '@/types/spotify'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const spotifyApi = createApi({
  reducerPath: 'spotifyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL
  }),
  endpoints: (builder) => ({
    getRecentlyPlayed: builder.query<Data, null>({
      query: () => 'api/spotify'
    })
  })
})

export const { useGetRecentlyPlayedQuery } = spotifyApi
