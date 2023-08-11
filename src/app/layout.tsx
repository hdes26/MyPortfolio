import '@/styles/globals.css'
import { Providers } from '@/redux/providers'
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='h-full'>
      <head>
        <title>Hernan Escorcia | Full stack developer</title>
      </head>
      <body suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
