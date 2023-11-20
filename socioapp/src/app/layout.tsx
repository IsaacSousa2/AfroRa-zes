import type { Metadata } from 'next'
import { Ubuntu_Mono } from 'next/font/google'
import './globals.css'

const ubuntu = Ubuntu_Mono({ subsets: ['latin'], weight:['400', '700'] })

export const metadata: Metadata = {
  
  title: 'AfroRaízes',
  description: 'Site para adicionar conhecimento sobre Quilombolas',
  icons:{
    icon:[
      '/favicon.ico?v=1'
    ],
    apple:[
      '/apple-touch-icon.png?v-4'
    ],
    shortcut:[
      '/apple-touch-icon.png'
    ],
  },
  manifest: 'site/webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
