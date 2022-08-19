/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useState } from "react"
import Loading from "./Loading"

function PokemonCard(props: any) {
  const [itensPerPage, setItensPerPage] = useState(16)
  const [loading, setLoading] = useState(false)
  const startIndex = 0 * itensPerPage
  const endIndex = startIndex + itensPerPage
  const pokemons = props.pokemons
  const currentPokemons = pokemons.slice(startIndex, endIndex)

  function loadMorePokemon() {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setItensPerPage(itensPerPage + 16)
    }, 1000)
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {currentPokemons &&
        currentPokemons.map((item: any, index: any) => {
          return (
            <div className="w-10/12 flex flex-col justify-center gap-2 font-exo select-none mb-4" key={index}>

              <div className="w-full flex items-center justify-between">
                <div className="flex flex-col justify-center">
                  <span className="self-start text-neutral-500 font-bold">
                    {item.entry_number < 10 && `n 00${item.entry_number}`}
                    {item.entry_number >= 10 && item.entry_number < 100 && `n 0${item.entry_number}`}
                    {item.entry_number >= 100 && `n ${item.entry_number}`}
                  </span>
                  <h2 className="capitalize text-3xl text-neutral-800 font-bold">
                    {item.pokemon_species.name}
                  </h2>
                </div>
              </div>

              <div className="w-full bg-neutral-100 p-8 rounded-lg flex items-center justify-center mb-2">
                <Link href={`/${item.entry_number}`}>
                  <a>
                    <img
                      className="w-full hover:animate-oneTimeBounce"
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.entry_number}.png`}
                      alt={item.pokemon_species.name}
                    />
                  </a>
                </Link>
              </div>
            </div>
          )
        })}

      <div className="w-10/12 flex items-center justify-center my-2">
        <>
        {itensPerPage < 151 && !loading &&
          <button
          className="w-full bg-sky-600 hover:bg-sky-700 py-2 rounded transition-all shadow-button text-white font-exo text-lg"
          onClick={(e) => {
            loadMorePokemon()
          }}
          >
            Load more Pokémon
          </button>
        }

        {loading &&
          <Loading />
        }
        </>
      </div>
    </div>
  )
}

export default PokemonCard
