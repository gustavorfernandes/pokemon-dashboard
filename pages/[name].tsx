import Footer from "../src/patterns/Footer"
import PokemonAbout from "../src/patterns/PokemonAbout"
import axios from "axios"

const Pokemon = ({ pokemon }: any) => {  
  return (
    <>
      <PokemonAbout pokemon={pokemon}/>

      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokedex/2/`)
    .then((response) => {
      return response.data.pokemon_entries
    })
    .catch((error) => {
      console.log(error)
    })
  console.log(pokemons)
  const paths = pokemons.map((pokemon: any) => ({
    params: { name: pokemon.pokemon_species.name },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}/`)
  .then((response) => {
    return response.data
  })
  .catch((error) => {
    console.log(error)
  })
  return { props: { pokemon }}
}

export default Pokemon
