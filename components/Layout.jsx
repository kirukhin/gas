// components/Layout.jsx
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Analytics from './Analytics'
import AnalyticsRouter from './AnalyticsRouter'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {/* Общие теги (временные или доп. мета) */}
        <meta name="format-detection" content="telephone=no" />
      </Head>

      <Analytics />
      <AnalyticsRouter />
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  )
}


