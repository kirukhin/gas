// components/Layout.jsx
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Analytics from './Analytics'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {/* Общие теги (временные или доп. мета) */}
        <meta name="format-detection" content="telephone=no" />
      </Head>

      <Analytics />
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  )
}


