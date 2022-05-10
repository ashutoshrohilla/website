import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Ashutosh Rohilla's wesbite!" />
        <p className="description">
          This website is under development
        </p>
      </main>

      <Footer />
    </div>
  )
}
