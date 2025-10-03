import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Блицгаз — Газоразделительные установки</title>
        <meta name="description" content="Азот и кислород промышленной чистоты — под любые задачи." />
      </Head>

      <section className="pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-black">Блицгаз — Демо-страница</h1>
          <p className="text-gray-700 mt-4">Это тестовая home-страница Next.js после миграции.</p>
        </div>
      </section>
    </>
  )
}
