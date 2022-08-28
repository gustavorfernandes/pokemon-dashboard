import type { NextPage } from "next"
import Head from "next/head"
import axios from "axios"
import { useContext } from "react"
import { GlobalContext } from "../src/contexts/GlobalContext"
import Dashboard from "../src/screens/DashboardScreen"

export async function getStaticProps(context: any) {

  const pokemons = await axios.get("https://pokeapi.co/api/v2/pokedex/2/")
    .then((response) => {
      return response.data.pokemon_entries
    })
    .catch((error) => {
      console.log(error)
    })

  let pokemonsObject: any[] = []

  await pokemons.reduce(async (acc: any[], currentPokemon: any) => {
    const types = await axios.get(`https://pokeapi.co/api/v2/pokemon/${currentPokemon.entry_number}/`)
      .then((response) => {
        return Array.from(response.data.types)
      })
      .catch((error) => {
        console.log(error)
      })
    const currentObject = ({ number: currentPokemon.entry_number, name: currentPokemon.pokemon_species.name, types: types })
    pokemonsObject.push(currentObject)
    return acc
  }, [])

  pokemonsObject = pokemonsObject.sort((a: any, b: any) => {
    return a["number"] < b["number"] ? -1 : 1
  })

  return {
    props: {
      pokemons, pokemonsObject
    },
  }
}

const Home: NextPage = ({ pokemons, pokemonsObject }: any) => {
  const { setPokemonList }: any = useContext(GlobalContext)
  setPokemonList(pokemonsObject)

  return (
    <>
      <Head>
        <title>Pokédex | Dashboard</title>
        <meta name="description" content="Pokédex Dashboard Web Application" />
      </Head>

      <Dashboard pokemons={pokemons} pokemonsObject={pokemonsObject} />
    </>
  )
}

export default Home
