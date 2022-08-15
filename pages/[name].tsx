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
  const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    .then((response) => {
      return response.data.results
    })
    .catch((error) => {
      console.log(error)
    })
  const paths = pokemons.map((pokemon: any) => ({
    params: { name: pokemon.name },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
  .then((response) => {
    return response.data
  })
  .catch((error) => {
    console.log(error)
  })
  return { props: { pokemon }}
}

export default Pokemon
