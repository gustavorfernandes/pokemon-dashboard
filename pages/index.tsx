import type { NextPage } from 'next'
import Head from 'next/head'
import DashboardScreen from '../src/screens/DashboardScreen'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pokédex | Dashboard</title>
        <meta name="description" content="Pokédex Dashboard Web Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DashboardScreen />        
    </>
  )
}

export default Home
