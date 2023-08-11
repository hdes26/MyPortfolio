import { Data } from '@/types/weather'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const weatherKey: string = process.env.NEXT_PUBLIC_WEATHER_KEY as string

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org'
  }),
  endpoints: (builder) => ({
    getWeather: builder.query<Data, {city:string}>({
      query: ({ city }) => {
        return {
          url: 'data/2.5/weather/',
          params: { q: city, appid: weatherKey }
        }
      }
    })
  })
})

export const { useGetWeatherQuery } = weatherApi
