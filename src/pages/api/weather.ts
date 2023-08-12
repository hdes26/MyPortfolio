import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req:NextApiRequest, res:NextApiResponse) => {
  try {
    const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=barranquilla,colombia&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`
    ).then((res) => res.json())
    res.status(200).json(response)
  } catch (error) {
    console.log(error)
  }
}

export default handler
