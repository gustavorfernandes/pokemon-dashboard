import type { NextPage } from "next"
import Head from "next/head"
import Footer from "../src/patterns/Footer"
import Header from "../src/patterns/Header"
import PokemonList from "../src/patterns/PokemonList"
import axios from "axios"

export async function getStaticProps(context: any) {
  const pokemons = await axios.get("https://pokeapi.co/api/v2/pokedex/2/")
    .then((response) => {
      return response.data.pokemon_entries
    })
    .catch((error) => {
      console.log(error)
    })
  return {
    props: {
      pokemons
    },
  }
}

const Home: NextPage = (props) => {
  const { pokemons }: any = props
  
  return (
    <>
      <Head>
        <title>Pokédex | Dashboard</title>
        <meta name="description" content="Pokédex Dashboard Web Application" />
      </Head>

      <Header />

      <PokemonList pokemons={pokemons} />

      <Footer />
    </>
  )
}

export default Home
