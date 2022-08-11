/* eslint-disable react-hooks/exhaustive-deps */
import PokemonCard from "../components/PokemonCard"
import Search from "../components/Search"
import { GlobalContext } from "../contexts/GlobalContext"
import { useContext, useEffect } from "react"

function  PokemonList() {
  const { fetchPokemonList }: any = useContext(GlobalContext)  

  useEffect(() => {
    fetchPokemonList("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10")
  }, [])

  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <div className="w-10/12 flex flex-col items-center justify-center mt-8">
        <div className="w-screen bg-neutral-800 py-4 mb-8 flex flex-col items-center justify-center gap-4">
          <div className="w-10/12 flex flex-col justify-center">
            <h1 className="w-9/12 font-exo font-light text-3xl text-neutral-100 mb-2">
              Pokédex
            </h1>

            <h2 className="w-10/12 text-base text-neutral-200 my-4 font-roboto font-light">
              Search for a Pokémon by name or using its National Pokédex number.
            </h2>

            <Search />
          </div>
        </div>
      </div>

      <PokemonCard />

      <div className="w-10/12 flex items-center justify-center mt-12">
        <button className="w-full bg-sky-600 hover:bg-sky-700 py-2 rounded transition-all shadow-button text-white font-exo text-lg">
          Load more Pokémon
        </button>
      </div>

    </div>
  )
}

export default PokemonList
