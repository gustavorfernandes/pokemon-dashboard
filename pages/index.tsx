import type { NextPage } from "next"
import Head from "next/head"
import Footer from "../src/patterns/Footer"
import Header from "../src/patterns/Header"
import PokemonList from "../src/patterns/PokemonList"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pokédex | Dashboard</title>
        <meta name="description" content="Pokédex Dashboard Web Application" />        
      </Head>

      <Header />

      <PokemonList />

      <Footer />
    </>
  )
}

export default Home
