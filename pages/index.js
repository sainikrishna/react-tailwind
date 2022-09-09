import Head from 'next/head'
import HomeContainer from '../containers/home'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Moments of Space</title>
        <meta name="description" content="Moments of Space" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeContainer />
    </div>
  )
}
