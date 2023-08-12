import { NextResponse } from 'next/server'

export async function GET () {
  const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=barranquilla,colombia&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`
  ).then((res) => res.json())
  return NextResponse.json(response)
}
