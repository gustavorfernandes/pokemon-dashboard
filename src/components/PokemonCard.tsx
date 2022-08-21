/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useState } from "react"
import Loading from "./Loading"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function PokemonCard(props: any) {
  const { pokemonList }: any = useContext(GlobalContext)
  const [itensPerPage, setItensPerPage] = useState(12)
  const [loading, setLoading] = useState(false)
  const startIndex = 0 * itensPerPage
  const endIndex = startIndex + itensPerPage
  const pokemons = pokemonList
  const currentPokemons = pokemons.slice(startIndex, endIndex)

  function loadMorePokemon() {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setItensPerPage(itensPerPage + 12)
    }, 250)
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-10/12 flex flex-col justify-center mb-8">
        <span className="text-neutral-500 font-exo mb-1">
          Sort by
        </span>
        <div className="bg-neutral-800 flex items-center justify-center rounded text-white relative">
          <select className="w-full bg-transparent p-2 rounded outline-none">
            <option className="bg-neutral-700">
              Lowest Number (First)
            </option>
            <option className="bg-neutral-700 flex items-center justify-center">
                Highest Number (First)            
            </option>
            <option className="bg-neutral-700">
              A-Z
            </option>
            <option className="bg-neutral-700">
              Z-A
            </option>
          </select>

        </div>
      </div>

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

      {itensPerPage < 151 &&
        <div className="w-10/12 flex items-center justify-center my-2 relative">
          <button
            className="w-full bg-sky-600 hover:bg-sky-700 rounded transition-all shadow-button text-white font-exo text-lg h-12"
            onClick={(e) => {
              loadMorePokemon()
            }}
          >
            {!loading &&
              <span>
                Load more Pokémon
              </span>
            }
          </button>
          {loading &&
            <div className="absolute bottom-1">
              <Loading />
            </div>
          }
        </div>
      }
    </div >
  )
}

export default PokemonCard
