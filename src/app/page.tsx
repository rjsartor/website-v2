import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LeftPane from './left-pane'
import RightPane from './right-pane'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Personal Website v2',
  description: 'Generated by create next app',
}

export default function Home() {
  return (
    <html lang="en">
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your Site Title</title>
        {/* other head elements */}
      </Head>
      <body className={`${inter.className} flex flex-col md:flex-row sm:flex-row pt-24 justify-center`}>
      <div className="layout-width">
          <LeftPane />
          <div className="flex-1">
            <RightPane />
          </div>
        </div>
      </body>
    </html>
  )
}
