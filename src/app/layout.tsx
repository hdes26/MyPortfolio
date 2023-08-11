import '@/styles/globals.css'
import { Providers } from '@/redux/providers'

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
      </body>
    </html>
  )
}
