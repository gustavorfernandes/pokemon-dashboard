/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import Loading from "./Loading"
import { CaretDown, Check } from "phosphor-react"
import { Listbox } from "@headlessui/react"
import { useState, useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

const options = [
  { id: 1, name: 'Lowest Number (First)', unavailable: false },
  { id: 2, name: 'Highest Number (First)', unavailable: false },
  { id: 3, name: 'A-Z', unavailable: false },
  { id: 4, name: 'Z-A', unavailable: false }
]

function toggleType(type: string, index: string) {
  const tagColor = type
  return (
    <span
      id={index}
      className={`capitalize h-6 w-24 flex items-center justify-center text-center shadow-tag rounded text-sm font-exo ${tagColor === "normal" && "bg-normal"} ${tagColor === "fighting" && "bg-fighting text-white"} ${tagColor === "flying" && "bg-flying"} ${tagColor === "poison" && "bg-poison text-white"} ${tagColor === "ground" && "bg-ground"} ${tagColor === "rock" && "bg-rock text-white"} ${tagColor === "bug" && "bg-bug text-white"} ${tagColor === "ghost" && "bg-ghost text-white"} ${tagColor === "steel" && "bg-steel"} ${tagColor === "fire" && "bg-fire text-white"} ${tagColor === "water" && "bg-water text-white"} ${tagColor === "grass" && "bg-grass"} ${tagColor === "electric" && "bg-electric"} ${tagColor === "psychic" && "bg-psychic text-white"} ${tagColor === "ice" && "bg-ice"} ${tagColor === "dragon" && "bg-dragon text-white"} ${tagColor === "dark" && "bg-dark text-white"} ${tagColor === "fairy" && "bg-fairy"}`}
      key={index}
    >
      {type}
    </span>
  )
}

function PokemonCard(props: any) {
  const { currentPokemonList, itensPerPage, setItensPerPage }: any = useContext(GlobalContext)
  const pokemons = currentPokemonList
  const [loading, setLoading] = useState(false)
  const [selectList, setSelectList] = useState(options[0])

  const [order, setOrder] = useState(1)
  const [filterOrder, setFilterOrder] = useState("number")

  function loadMorePokemon() {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setItensPerPage(itensPerPage + 12)
    }, 250)
  }

  let pokemonsReduce = pokemons.reduce((pokemonsReduce: any, currentPokemon: any) => {
    pokemonsReduce[currentPokemon.number] = { number: currentPokemon.number, name: currentPokemon.name, types: currentPokemon.types }
    return pokemonsReduce
  }, [])

  pokemonsReduce = pokemonsReduce.sort((a: any, b: any) => {
    return a[filterOrder] < b[filterOrder] ? -order : order
  })

  const startIndex = 0 * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currentPokemons = pokemonsReduce.slice(startIndex, endIndex)

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-10/12 flex flex-col justify-center mb-8">
        <span className="text-neutral-500 font-exo font-bold mb-1">
          Sort by
        </span>
        <div className="w-full text-white font-exo ">
          <Listbox value={selectList} onChange={(e) => {
            if (e.id === 1) {
              setOrder(1)
              setFilterOrder("number")
              setItensPerPage(12)
            } else if (e.id === 2) {
              setOrder(-1)
              setFilterOrder("number")
              setItensPerPage(12)
            } else if (e.id === 3) {
              setOrder(1)
              setFilterOrder("name")
              setItensPerPage(12)
            } else if (e.id === 4) {
              setOrder(-1)
              setFilterOrder("name")
              setItensPerPage(12)
            }
            setSelectList(e)
          }}>
            <div className="relative mt-1 ">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-neutral-800 py-3 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm font-light">
                <span className="block truncate ">{selectList.name}</span>
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

      {currentPokemons.map((pokemon: any) => {
        return (
          <div className="w-10/12 flex flex-col justify-center font-exo select-none mb-4" key={pokemon.number}>

            <div className="w-full bg-neutral-100 p-8 rounded-lg flex items-center justify-center mb-2">
              <Link href={`/${pokemon.number}`}>
                <a>
                  <img
                    className="w-full hover:animate-oneTimeBounce"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.number}.png`}
                    alt={pokemon.name}
                  />
                </a>
              </Link>
            </div>

            <div className="w-full flex justify-between mb-4">
              <div className="flex flex-col leading-7">
                <span className="self-start text-neutral-500 font-bold">
                  {pokemon.number < 10 && `nº 00${pokemon.number}`}
                  {pokemon.number >= 10 && pokemon.number < 100 && `nº 0${pokemon.number}`}
                  {pokemon.number >= 100 && `nº ${pokemon.number}`}
                </span>
                <h2 className="capitalize text-3xl text-neutral-800 font-bold">
                  {pokemon.name}
                </h2>
              </div>
              <div className="flex flex-col items-center gap-2 mt-1">
                {pokemon.types.map((item: any) => (
                  toggleType(item.type.name, item.type.name)
                ))}
              </div>
            </div>
          </div>
        )
      })
      }

      {pokemons.length > currentPokemons.length && pokemons.length > 0 &&
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

      {pokemons.length === 0 &&
        <div className="w-full border-2 border-red-500 rounded-md flex flex-col items-center justify-center p-2 select-none font-exo gap-2">
          <span className="text-red-600 text-lg">
            No Pokémon Matched Your Search!
          </span>
          <span className="text-neutral-500 font-bold">
            Try these suggestions:
          </span>
          <div className="text-neutral-500">
            <ul className="flex flex-col items-center justify-center gap-1 text-sm text-center">
              <li className="list-disc">
                Reduce the number of search parameters
              </li>
              <li className="list-disc">
                Search for only one Pokémon type at a time
              </li>
            </ul>
          </div>
        </div>
      }
    </div >
  )
}

export default PokemonCard
