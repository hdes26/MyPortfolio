import { getRecentlyPlayed } from '@/lib/spotify'
import { NextResponse } from 'next/server'

export async function GET () {
  const response = await getRecentlyPlayed()
  const data = await response.json()
  return NextResponse.json(data)
}
