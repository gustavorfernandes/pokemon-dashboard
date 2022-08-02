import type { NextPage } from 'next'
import Head from 'next/head'
import PokemonScreen from '../src/screens/PokemonScreen'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bulbasaur | Pokédex</title>
        <meta name="description" content="Pokédex Dashboard Web Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PokemonScreen />        
    </>
  )
}

export default Home
