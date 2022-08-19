import Footer from "../src/patterns/Footer"
import PokemonAbout from "../src/patterns/PokemonAbout"
import axios from "axios"

const Pokemon = ({ pokemon, description, weakness }: any) => {
  return (
    <>
      <PokemonAbout pokemon={pokemon} description={description} weakness={weakness} />

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

  const paths = pokemons.map((pokemon: any) => ({
    params: { id: `${pokemon.entry_number}` },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })

  const description = await axios.get(pokemon.species.url)
    .then((response) => {
      return response.data.flavor_text_entries[10].flavor_text
    })
    .catch((error) => {
      console.log(error)
    })

  const weakness: string[] = []
  await Promise.all(pokemon.types.map(async (item: any) => {
    await axios.get(item.type.url)
      .then((response) => {
        response.data.damage_relations.double_damage_from.map((type: any) => {
          weakness.push(type.name)
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }))

  return { props: { pokemon, description, weakness } }
}

export default Pokemon
