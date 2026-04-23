import Head from 'next/head'
import Script from 'next/script'
import Header from './Header'
import Footer from './Footer'
import Analytics from './Analytics'
import AnalyticsRouter from './AnalyticsRouter'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=no" />
      </Head>

      {/* ✅ CMP — САМЫЙ ПЕРВЫЙ */}
      <Script
        id="cookieyes"
        src="https://cdn-cookieyes.com/client_data/36dc38fde35e0cc789a8a8f7/script.js"
        strategy="beforeInteractive"
      />

      {/* аналитика ПОСЛЕ CMP */}
      <Analytics />
      <AnalyticsRouter />

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}