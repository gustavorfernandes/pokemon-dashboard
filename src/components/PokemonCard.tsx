/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import Loading from "./Loading"
import { useContext, useState, Fragment } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { CaretDown, Check } from "phosphor-react"
import { Listbox } from "@headlessui/react"

const options = [
  { id: 1, name: 'Lowest Number (First)', unavailable: false },
  { id: 2, name: 'Highest Number (First)', unavailable: false },
  { id: 3, name: 'A-Z', unavailable: false },
  { id: 4, name: 'Z-A', unavailable: false }
]

function PokemonCard(props: any) {
  const { pokemonList }: any = useContext(GlobalContext)
  const [itensPerPage, setItensPerPage] = useState(12)
  const [loading, setLoading] = useState(false)
  const startIndex = 0 * itensPerPage
  const endIndex = startIndex + itensPerPage
  const pokemons = pokemonList
  const currentPokemons = pokemons.slice(startIndex, endIndex)
  const [selectedList, setSelectedList] = useState(options[0])

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
        <span className="text-neutral-500 font-exo font-bold mb-1">
          Sort by
        </span>
        <div className="w-full text-white font-exo ">
          <Listbox value={selectedList} onChange={setSelectedList}>
            <div className="relative mt-1 ">
              <Listbox.Button className="relative  w-full cursor-default rounded-md bg-neutral-800 py-3 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm font-light">
                <span className="block truncate ">{selectedList.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 ">
                  <CaretDown
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Listbox.Options className="absolute max-h-60 w-full overflow-auto rounded-bl-md rounded-br-md bg-neutral-700 -mt-[2px] text-base font-light shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((item, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-default font-light select-none py-2 pl-10 pr-4 ${active ? 'bg-neutral-800' : 'text-white'
                      }`
                    }
                    value={item}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-light' : 'font-light'
                            }`}
                        >
                          {item.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                            <Check className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>
      </div>

      {
        currentPokemons &&
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
        })
      }

      {
        itensPerPage < 151 &&
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
