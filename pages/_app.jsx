// pages/_app.jsx
import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteComplete = (url) => {
      if (typeof window === 'undefined') return

      const hashIndex = url.indexOf('#')
      if (hashIndex !== -1) {
        const hash = url.substring(hashIndex + 1)
        let attempts = 0

        const tryScroll = () => {
          attempts += 1
          const el = document.getElementById(hash)
          if (el) {
            // ⚡ Скролл без учёта высоты хедера
            const top = el.getBoundingClientRect().top + window.pageYOffset - 8
            window.scrollTo({ top, behavior: 'smooth' })
          } else if (attempts < 8) {
            setTimeout(tryScroll, 80)
          }
        }

        setTimeout(tryScroll, 60)
      } else {
        // Новая страница — скроллим в начало
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    router.events.on('routeChangeComplete', handleRouteComplete)
    return () => {
      router.events.off('routeChangeComplete', handleRouteComplete)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
