/* eslint-disable @next/next/no-img-element */
import { Listbox } from "@headlessui/react"
import { GoSearch } from "@react-icons/all-files/go/GoSearch"
import { AnimatePresence, motion } from "framer-motion"
import { X, FunnelSimple, CaretDown, Check } from "phosphor-react"
import { useState, useContext } from "react"
import Search from "../components/Search"
import { GlobalContext } from "../contexts/GlobalContext"

function Header() {
  const { setInitial, setItensPerPage, pokemonList, setCurrentPokemonList, selectList, setSelectList, options, order, setOrder, filter, setFilter, filterOrder, setFilterOrder, pokemonCard }: any = useContext(GlobalContext)

  const [isOpen, setOpen] = useState(false)
  
  function toggleMenu() {
    setOpen(!isOpen)
  }  

  function toggleTag(type: string) {
    const filterType = type
    setFilter(filterType)
  }

  function searchByType(type: string) {
    if (!type) {
      return pokemonList
    } else {
      return pokemonList.filter(function (item: any) {
        if (item.types[1]) {
          return item.types[0].type.name === type || item.types[1].type.name === type
        } else {
          return item.types[0].type.name === type
        }
      })
    }
  }

  return (
    <>
      <div className={`w-screen flex flex-col items-center justify-center pt-4 lg:h-16 ${pokemonCard ? "hidden" : "lg:hidden"}`}>
        <div className="w-10/12 flex items-center justify-between">
          <img
            className="w-20 md:w-24 justify-self-center"
            src="/images/pokemon-logo.png"
            alt="Pokémon Logo"
          />

          <button
            className="font-bold text-neutral-800 flex items-center -justify-center"
            onClick={toggleMenu}
          >
            <FunnelSimple
              className="bg-neutral-200 rounded-md shadow-button hover:scale-105 transition-all p-[10px] w-11 md:w-14 h-11 md:h-14 md:p-4"
              size={30}
              weight="bold"
            />
          </button>
        </div>
      </div>

      <div className="hidden lg:flex w-full lg:bg-white items-center justify-center h-[4.75rem] mb-8 lg:mb-0 z-30 shadow-container select-none">
        <div className="w-11/12 flex items-center justify-between">
          <div className="flex items-center justify-center">
            
            <div className="flex items-center justify-center">
              <Search />
            </div>
          </div>
          <div className="w-full flex items-center justify-end gap-4 pr-8">
            <span className="text-neutral-500 font-exo font-bold text-sm">
              Sort by
            </span>
            <div className="w-full max-w-[15rem] text-white font-exo z-20">
              <Listbox disabled={pokemonCard} value={selectList} onChange={(e) => {
                if (e.id === 1) {
                  setOrder(1)
                  setFilterOrder("number")                  
                } else if (e.id === 2) {
                  setOrder(-1)
                  setFilterOrder("number")                  
                } else if (e.id === 3) {
                  setOrder(1)
                  setFilterOrder("name")                  
                } else if (e.id === 4) {
                  setOrder(-1)
                  setFilterOrder("name")                  
                }
                setSelectList(e)
              }}>
                <div className="relative">
                  <Listbox.Button className="relative w-full h-10 cursor-default rounded-md bg-neutral-800 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 font-light text-sm">
                    <span className="block truncate ">{selectList.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 ">
                      <CaretDown
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Listbox.Options className="absolute max-h-60 w-full overflow-auto rounded-bl-md rounded-br-md bg-neutral-700 -mt-[2px] font-light shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm">
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
        </div>
      </div>

      <AnimatePresence>
        {isOpen &&
          <motion.div
            className="bg-neutral-700 flex flex-col items-center fixed rounded-sm w-10/12 sm:w-8/12 md:w-6/12 h-screen shadow-button select-none z-30 right-0"
            initial={{ x: 1100 }}
            animate={{ x: - 0 }}
            exit={{ x: 1100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full flex flex-col items-center justify-center mt-8">
              <div className="w-10/12 flex items-center justify-end text-neutral-100 font-exo">
                <button
                  className="text-white rounded-md hover:scale-125 transition-all"
                  onClick={() => {
                    toggleMenu()
                    if (!filter) {
                      const currentList = searchByType(filter)
                      setCurrentPokemonList(currentList)
                      setItensPerPage(12)
                      setInitial(false)
                    }
                  }}
                >
                  <X
                    size={16}
                    weight="bold"
                  />
                </button>
              </div>

              <div className="w-10/12 flex items-center 
              mt-8 mb-4 text-neutral-100 font-exo">
                <h2 className="text-3xl font-light text-neutral-100">
                  Advanced Search
                </h2>
              </div>
              <div className="w-full flex items-center justify-center mb-2 bg-neutral-700">
                <div className="w-10/12 flex flex-col justify-center">
                  <span className="font-light text-2xl font-exo text-neutral-100">
                    Filter by Type
                  </span>
                  <span className="font-light text-xs font-exo text-neutral-200 mt-1">
                    T = Type
                  </span>
                </div>

              </div>

              <div className="w-10/12 flex items-center mt-2 font-exo text-2xl gap-2">
                <div className="w-6/12 flex flex-col justify-center items-center gap-2">
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-16 h-6 text-center shadow-tag rounded-md text-xs font-exo bg-bug flex items-center justify-center text-white"
                    >
                      Bug
                    </span>
                    <button
                      onClick={() => {
                        if (filter === "bug") {
                          toggleTag("")
                        } else {
                          toggleTag("bug")
                        }
                      }}
                      className={`flex items-center justify-center rounded-full h-5 w-5 text-sm ${filter === "bug" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-16 h-6 text-center shadow-tag rounded-md text-xs font-exo bg-dragon flex items-center justify-center text-white"
                    >
                      Dragon
                    </span>
                    <button
                      onClick={() => {
                        if (filter === "dragon") {
                          toggleTag("")
                        } else {
                          toggleTag("dragon")
                        }
                      }}
                      className={`flex items-center justify-center rounded-full h-5 w-5 text-sm ${filter === "dragon" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-16 h-6 text-center shadow-tag rounded-md text-xs font-exo bg-fairy flex items-center justify-center"
                    >
                      Fairy
                    </span>
                    <button
                      onClick={() => {
                        if (filter === "fairy") {
                          toggleTag("")
                        } else {
                          toggleTag("fairy")
                        }
                      }}
                      className={`flex items-center justify-center rounded-full h-5 w-5 text-sm ${filter === "fairy" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-16 h-6 text-center shadow-tag rounded-md text-xs font-exo bg-fire flex items-center justify-center text-white"
                    >
                      Fire
                    </span>
                    <button
                      onClick={() => {
                        if (filter === "fire") {
                          toggleTag("")
                        } else {
                          toggleTag("fire")
                        }
                      }}
                      className={`flex items-center justify-center rounded-full h-5 w-5 text-sm ${filter === "fire" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-16 h-6 text-center shadow-tag rounded-md text-xs font-exo bg-ghost flex items-center justify-center text-white"
                    >
                      Ghost
                    </span>
                    <button
                      onClick={() => {
                        if (filter === "ghost") {
                          toggleTag("")
                        } else {
                          toggleTag("ghost")
                        }
                      }}
                      className={`flex items-center justify-center rounded-full h-5 w-5 text-sm ${filter === "ghost" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-16 h-6 text-center shadow-tag rounded-md text-xs font-exo bg-ground flex items-center justify-center"
                    >
                      Ground
                    </span>
                    <button
                      onClick={() => {
                        if (filter === "ground") {
                          toggleTag("")
                        } else {
                          toggleTag("ground")
                        }
                      }}
                      className={`flex items-center justify-center rounded-full h-5 w-5 text-sm ${filter === "ground" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-16 h-6 text-center shadow-tag rounded-md text-xs font-exo bg-normal flex items-center justify-center"
                    >
                      Normal
                    </span>
                    <button
                      onClick={() => {
                        if (filter === "normal") {
                          toggleTag("")
                        } else {
                          toggleTag("normal")
                        }
                      }}
                      className={`flex items-center justify-center rounded-full h-5 w-5 text-sm ${filter === "normal" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-16 h-6 text-center shadow-tag rounded-md text-xs font-exo bg-psychic flex items-center justify-center text-white"
                    >
                      Psychic
                    </span>
                    <button
                      onClick={() => {
                        if (filter === "psychic") {
                          toggleTag("")
                        } else {
                          toggleTag("psychic")
                        }
                      }}
                      className={`flex items-center justify-center rounded-full h-5 w-5 text-sm ${filter === "psychic" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-16 h-6 text-center shadow-tag rounded-md text-xs font-exo bg-steel flex items-center justify-center"
                    >
                      Steel
                    </span>
                    <button
                      onClick={() => {
                        if (filter === "steel") {
                          toggleTag("")
                        } else {
                          toggleTag("steel")
                        }
                      }}
                      className={`flex items-center justify-center rounded-full h-5 w-5 text-sm ${filter === "steel" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                </div>
                <div className="w-6/12 flex flex-col justify-center items-center gap-2">
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-16 h-6 text-center shadow-tag rounded-md text-xs font-exo bg-dark flex items-center justify-center text-white"
                    >
                      Dark
                    </span>
                    <button
                      onClick={() => {
                        if (filter === "dark") {
                          toggleTag("")
                        } else {
                          toggleTag("dark")
                        }
                      }}
                      className={`flex items-center justify-center rounded-full h-5 w-5 text-sm ${filter === "dark" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-16 h-6 text-center shadow-tag rounded-md text-xs font-exo bg-electric flex items-center justify-center"
                    >
                      Electric
                    </span>
                    <button
                      onClick={() => {
                        if (filter === "electric") {
                          toggleTag("")
                        } else {
                          toggleTag("electric")
                        }
                      }}
                      className={`flex items-center justify-center rounded-full h-5 w-5 text-sm ${filter === "electric" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-16 h-6 text-center shadow-tag rounded-md text-xs font-exo bg-fighting flex items-center justify-center text-white"
                    >
                      Fighting
                    </span>
                    <button
                      onClick={() => {
                        if (filter === "fighting") {
                          toggleTag("")
                        } else {
                          toggleTag("fighting")
                        }
                      }}
                      className={`flex items-center justify-center rounded-full h-5 w-5 text-sm ${filter === "fighting" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-16 h-6 text-center shadow-tag rounded-md text-xs font-exo bg-flying flex items-center justify-center"
                    >
                      Flying
                    </span>
                    <button
                      onClick={() => {
                        if (filter === "flying") {
                          toggleTag("")
                        } else {
                          toggleTag("flying")
                        }
                      }}
                      className={`flex items-center justify-center rounded-full h-5 w-5 text-sm ${filter === "flying" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-16 h-6 text-center shadow-tag rounded-md text-xs font-exo bg-grass flex items-center justify-center"
                    >
                      Grass
                    </span>
                    <button
                      onClick={() => {
                        if (filter === "grass") {
                          toggleTag("")
                        } else {
                          toggleTag("grass")
                        }
                      }}
                      className={`flex items-center justify-center rounded-full h-5 w-5 text-sm ${filter === "grass" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-16 h-6 text-center shadow-tag rounded-md text-xs font-exo bg-ice flex items-center justify-center"
                    >
                      Ice
                    </span>
                    <button
                      onClick={() => {
                        if (filter === "ice") {
                          toggleTag("")
                        } else {
                          toggleTag("ice")
                        }
                      }}
                      className={`flex items-center justify-center rounded-full h-5 w-5 text-sm ${filter === "ice" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-16 h-6 text-center shadow-tag rounded-md text-xs font-exo bg-poison flex items-center justify-center text-white"
                    >
                      Poison
                    </span>
                    <button
                      onClick={() => {
                        if (filter === "poison") {
                          toggleTag("")
                        } else {
                          toggleTag("poison")
                        }
                      }}
                      className={`flex items-center justify-center rounded-full h-5 w-5 text-sm ${filter === "poison" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-16 h-6 text-center shadow-tag rounded-md text-xs font-exo bg-rock flex items-center justify-center text-white"
                    >
                      Rock
                    </span>
                    <button
                      onClick={() => {
                        if (filter === "rock") {
                          toggleTag("")
                        } else {
                          toggleTag("rock")
                        }
                      }}
                      className={`flex items-center justify-center rounded-full h-5 w-5 text-sm ${filter === "rock" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-16 h-6 text-center shadow-tag rounded-md text-xs font-exo bg-water flex items-center justify-center text-white"
                    >
                      Water
                    </span>
                    <button
                      onClick={() => {
                        if (filter === "water") {
                          toggleTag("")
                        } else {
                          toggleTag("water")
                        }
                      }}
                      className={`flex items-center justify-center rounded-full h-5 w-5 text-sm ${filter === "water" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col items-center justify-center mt-8 gap-4">
                <button
                  className="flex w-10/12 justify-center items-center bg-red-500 hover:bg-red-600 transition-all py-2 rounded-md shadow-button gap-2 font-exo text-neutral-100"
                  onClick={() => {
                    toggleMenu()
                    const currentList = searchByType(filter)
                    setCurrentPokemonList(currentList)
                    setItensPerPage(12)
                    setInitial(false)
                  }}
                >
                  <GoSearch
                    color="white"
                    size={16}
                  />
                  Search
                </button>
                <button
                  className="flex w-10/12 justify-center items-center bg-neutral-500 hover:bg-neutral-600 transition-all py-2 rounded-md shadow-button gap-2 font-exo text-neutral-100"
                  onClick={() => {
                    toggleTag("")
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </>
  )
}

export default Header
