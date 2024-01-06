import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin']  })

export const metadata: Metadata = {
  title: 'Han Nguyen Portfolio',
  description: 'Han Nguyen - Software Engineer, based on Ho Chi Minh City, Vietnam.',
  icons: '/avatar.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className + "flex flex-col m-auto px-[20px] max-w-screen-sm"}>{children}</body>
    </html>
  )
}
