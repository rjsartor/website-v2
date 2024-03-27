import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Footer } from './components/footer'
import { Analytics } from '@vercel/analytics/react';
import { CursorHighlight } from './components/cursor-highlight';

export const metadata = {
  title: 'Randy Sartor',
  description: 'Website built with Next.js',
}

const inter = Inter({ 
  subsets: ['latin'],
  weight: '200',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your Site Title</title>
      </Head>
      <body>
        <div className='header-div'>
          <CursorHighlight />
          {children}
          <Analytics />
        </div>
        <Footer />
      </body>
    </html>
  )
}