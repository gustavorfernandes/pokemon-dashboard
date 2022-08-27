/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import Loading from "./Loading"
import { CaretDown, Check } from "phosphor-react"
import { Listbox } from "@headlessui/react"
import { useState, useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function toggleType(type: string, index: string) {
  const tagColor = type
  return (
    <span
      id={index}
      className={`capitalize h-6 md:h-4 w-24 md:w-20 lg:w-16 flex items-center justify-center text-center shadow-tag rounded text-sm md:text-xs font-exo ${tagColor === "normal" && "bg-normal"} ${tagColor === "fighting" && "bg-fighting text-white"} ${tagColor === "flying" && "bg-flying"} ${tagColor === "poison" && "bg-poison text-white"} ${tagColor === "ground" && "bg-ground"} ${tagColor === "rock" && "bg-rock text-white"} ${tagColor === "bug" && "bg-bug text-white"} ${tagColor === "ghost" && "bg-ghost text-white"} ${tagColor === "steel" && "bg-steel"} ${tagColor === "fire" && "bg-fire text-white"} ${tagColor === "water" && "bg-water text-white"} ${tagColor === "grass" && "bg-grass"} ${tagColor === "electric" && "bg-electric"} ${tagColor === "psychic" && "bg-psychic text-white"} ${tagColor === "ice" && "bg-ice"} ${tagColor === "dragon" && "bg-dragon text-white"} ${tagColor === "dark" && "bg-dark text-white"} ${tagColor === "fairy" && "bg-fairy"}`}
      key={index}
    >
      {type}
    </span>
  )
}

function PokemonCard(props: any) {
  const { currentPokemonList, itensPerPage, setItensPerPage, isInitial, selectList, setSelectList, options, order, setOrder, filterOrder, setFilterOrder }: any = useContext(GlobalContext)
  const pokemons = currentPokemonList
  const [loading, setLoading] = useState(false)

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
    <div className="w-full flex flex-col items-center justify-center lg:mt-8">
      <div className="lg:hidden w-10/12 flex flex-col justify-center mb-8">
        <span className="text-neutral-500 font-exo font-bold mb-1 md:text-lg">
          Sort by
        </span>
        <div className="w-full md:max-w-[50%] text-white font-exo z-20">
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
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-neutral-800 py-3 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 md:text-lg font-light">
                <span className="block truncate ">{selectList.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 ">
                  <CaretDown
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Listbox.Options className="absolute max-h-60 w-full overflow-auto rounded-bl-md rounded-br-md bg-neutral-700 -mt-[2px] text-base font-light shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:text-lg">
                {options.map((item: any, index: any) => (
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

      <div className="w-10/12 lg:w-full flex flex-col sm:flex-row sm:flex-wrap items-center justify-center sm:justify-start sm:gap-4 lg:gap-10 lg:max-h-[calc(100vh-200px)] lg:overflow-y-scroll scrollbar-pokemonList lg:mb-0 lg:px-4 lg:pl-12 lg:mr-4">
        {currentPokemons.map((pokemon: any) => {
          return (
            <div className="w-full sm:w-[48%] md:w-[31.5%] lg:w-[20%] xl:w-[13%] flex flex-col justify-center font-exo select-none mb-4" key={pokemon.number}>

              <div className="w-full bg-neutral-100 lg:bg-neutral-200 p-8 sm:p-2 rounded-lg flex items-center justify-center mb-2">
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

              <div className="w-full flex lg:flex-col justify-between mb-4 lg:mb-0">
                <div className="flex flex-col leading-7">
                  <span className="self-start text-neutral-500 font-bold md:text-sm lg:text-xs">
                    {pokemon.number < 10 && `nº 00${pokemon.number}`}
                    {pokemon.number >= 10 && pokemon.number < 100 && `nº 0${pokemon.number}`}
                    {pokemon.number >= 100 && `nº ${pokemon.number}`}
                  </span>
                  <h2 className="capitalize text-3xl text-neutral-800 font-bold md:text-lg lg:text-base">
                    {pokemon.name}
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-2 mt-1 md:mt-[2px]">
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
          <div className="hidden w-full lg:flex items-center justify-center my-2 relative">
            <button
              className="w-full md:max-w-xs bg-sky-600 hover:bg-sky-700 rounded transition-all shadow-button text-white font-exo text-lg h-12"
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

        {currentPokemons.length === 0 && !isInitial &&
          <div className="hidden lg:flex w-full items-center justify-center mt-[25vh]">
            <div className="flex w-full max-w-sm border-2 border-red-500 rounded-md flex-col items-center justify-center p-2 select-none font-exo gap-2 self-center">
              <span className="text-red-600 text-lg">
                No Pokémon Matched Your Search!
              </span>
              <span className="text-neutral-500 font-bold">
                Try these suggestions:
              </span>
              <div className="text-neutral-500">
                <ul className="flex flex-col items-center justify-center gap-1 text-sm text-center">
                  <li className="list-disc">
                    Check if the pokemon name is correct
                  </li>
                  <li className="list-disc">
                    Reduce the number of search parameters
                  </li>
                </ul>
              </div>
            </div>
          </div>
        }
      </div>

      {pokemons.length > currentPokemons.length && pokemons.length > 0 &&
        <div className="lg:hidden w-10/12 flex items-center justify-center my-2 relative">
          <button
            className="w-full md:max-w-xs bg-sky-600 hover:bg-sky-700 rounded transition-all shadow-button text-white font-exo text-lg h-12"
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

      {currentPokemons.length === 0 && !isInitial &&
        <div className="w-full lg:hidden sm:w-10/12 border-2 border-red-500 rounded-md flex flex-col items-center  justify-center p-2 select-none font-exo gap-2">
          <span className="text-red-600 text-lg">
            No Pokémon Matched Your Search!
          </span>
          <span className="text-neutral-500 font-bold">
            Try these suggestions:
          </span>
          <div className="text-neutral-500">
            <ul className="flex flex-col items-center justify-center gap-1 text-sm text-center">
              <li className="list-disc">
                Check if the pokemon name is correct
              </li>
              <li className="list-disc">
                Reduce the number of search parameters
              </li>
            </ul>
          </div>
        </div>
      }
    </div >
  )
}

export default PokemonCard
