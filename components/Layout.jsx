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

      <Script
  id="consentik-gcm"
  src="https://cmp.consentik.com/sites/d1d35009-36e3-47ca-8dd1-46a02d684faf/19585841572bc5a891525b33423d9f46/gcm.js"
  strategy="beforeInteractive"
/>

<Script
  id="consentik-loader"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: `
!function(e,t,n,s,i,c){
  const a=t.getElementsByTagName(n)[0];
  const d=t.createElement(n);

  d.id="cst-package";
  d.async=true;
  d.src="https://cmp.consentik.com/sites/d1d35009-36e3-47ca-8dd1-46a02d684faf/19585841572bc5a891525b33423d9f46/index.js?v="+(new Date().getMinutes());

  a.parentNode.insertBefore(d,a);
}(window,document,"script");
`
  }}
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