import Head from 'next/head'
import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>VYROX App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main style={{ minHeight: '70vh' }}>
        <Component {...pageProps} />
      </main>

      <Footer />

      <Analytics />
    </>
  )
}
