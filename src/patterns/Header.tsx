/* eslint-disable @next/next/no-img-element */
import { GoSearch } from "@react-icons/all-files/go/GoSearch"
import { AnimatePresence, motion } from "framer-motion"
import { X, FunnelSimple } from "phosphor-react"
import { useState, useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function Header() {
  const { setInitial, setItensPerPage, pokemonList, setCurrentPokemonList }: any = useContext(GlobalContext)
  const [isOpen, setOpen] = useState(false)
  const [filter, setFilter] = useState("")

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
      <div className="w-screen flex flex-col items-center justify-center pt-4">
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

      <AnimatePresence>
        {isOpen &&


          <motion.div
            className="bg-neutral-700 flex flex-col items-center fixed rounded-sm w-full z-20 right-0 inset-y-0 shadow-button select-none"
            initial={{ x: 1100 }}
            animate={{ x: - 0 }}
            exit={{ x: 1100 }}
            transition={{ duration: 0.5 }}
          >

            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-10/12 flex items-center justify-end mt-6 text-neutral-100 font-exo">
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
                    size={24}
                    weight="bold"
                  />
                </button>
              </div>

              <div className="w-10/12 flex items-center 
              my-11 text-neutral-100 font-exo">
                <h2 className="text-4xl font-light text-neutral-100">
                  Advanced Search
                </h2>
              </div>
              <div className="w-full flex items-center justify-center mb-2 bg-neutral-700">
                <div className="w-10/12 flex flex-col justify-center">
                  <span className="font-light text-3xl font-exo text-neutral-100">
                    Filter by Type
                  </span>
                  <span className="font-light text-sm md:text-lg  font-exo text-neutral-200 mt-1">
                    T = Type
                  </span>
                </div>

              </div>

              <div className="w-10/12 flex items-center justify-between mt-2 font-exo text-2xl gap-2">
                <div className="w-6/12 flex flex-col justify-center items-center gap-2">
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-20 md:w-28 h-8 md:h-9 text-center shadow-tag rounded-md text-sm md:text-lg font-exo bg-bug flex items-center justify-center text-white"
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
                      className={`flex items-center justify-center rounded-full h-6 w-6 text-lg ${filter === "bug" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-20 md:w-28 h-8 md:h-9 text-center shadow-tag rounded-md text-sm md:text-lg font-exo bg-dragon flex items-center justify-center text-white"
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
                      className={`flex items-center justify-center rounded-full h-6 w-6 text-lg ${filter === "dragon" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-20 md:w-28 h-8 md:h-9 text-center shadow-tag rounded-md text-sm md:text-lg font-exo bg-fairy flex items-center justify-center"
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
                      className={`flex items-center justify-center rounded-full h-6 w-6 text-lg ${filter === "fairy" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-20 md:w-28 h-8 md:h-9 text-center shadow-tag rounded-md text-sm md:text-lg font-exo bg-fire flex items-center justify-center text-white"
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
                      className={`flex items-center justify-center rounded-full h-6 w-6 text-lg ${filter === "fire" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-20 md:w-28 h-8 md:h-9 text-center shadow-tag rounded-md text-sm md:text-lg font-exo bg-ghost flex items-center justify-center text-white"
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
                      className={`flex items-center justify-center rounded-full h-6 w-6 text-lg ${filter === "ghost" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-20 md:w-28 h-8 md:h-9 text-center shadow-tag rounded-md text-sm md:text-lg font-exo bg-ground flex items-center justify-center"
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
                      className={`flex items-center justify-center rounded-full h-6 w-6 text-lg ${filter === "ground" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-20 md:w-28 h-8 md:h-9 text-center shadow-tag rounded-md text-sm md:text-lg font-exo bg-normal flex items-center justify-center"
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
                      className={`flex items-center justify-center rounded-full h-6 w-6 text-lg ${filter === "normal" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-20 md:w-28 h-8 md:h-9 text-center shadow-tag rounded-md text-sm md:text-lg font-exo bg-psychic flex items-center justify-center text-white"
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
                      className={`flex items-center justify-center rounded-full h-6 w-6 text-lg ${filter === "psychic" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-20 md:w-28 h-8 md:h-9 text-center shadow-tag rounded-md text-sm md:text-lg font-exo bg-steel flex items-center justify-center"
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
                      className={`flex items-center justify-center rounded-full h-6 w-6 text-lg ${filter === "steel" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                </div>
                <div className="w-6/12 flex flex-col justify-center items-center gap-2">
                  <div className="flex items-center justify-end sm:justify-start w-full gap-2">
                    <span
                      className="capitalize w-20 md:w-28 h-8 md:h-9 text-center shadow-tag rounded-md text-sm md:text-lg font-exo bg-dark flex items-center justify-center text-white"
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
                      className={`flex items-center justify-center rounded-full h-6 w-6 text-lg ${filter === "dark" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center justify-end sm:justify-start w-full gap-2">
                    <span
                      className="capitalize w-20 md:w-28 h-8 md:h-9 text-center shadow-tag rounded-md text-sm md:text-lg font-exo bg-electric flex items-center justify-center"
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
                      className={`flex items-center justify-center rounded-full h-6 w-6 text-lg ${filter === "electric" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center justify-end sm:justify-start w-full gap-2">
                    <span
                      className="capitalize w-20 md:w-28 h-8 md:h-9 text-center shadow-tag rounded-md text-sm md:text-lg font-exo bg-fighting flex items-center justify-center text-white"
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
                      className={`flex items-center justify-center rounded-full h-6 w-6 text-lg ${filter === "fighting" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center justify-end sm:justify-start w-full gap-2">
                    <span
                      className="capitalize w-20 md:w-28 h-8 md:h-9 text-center shadow-tag rounded-md text-sm md:text-lg font-exo bg-flying flex items-center justify-center"
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
                      className={`flex items-center justify-center rounded-full h-6 w-6 text-lg ${filter === "flying" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center justify-end sm:justify-start w-full gap-2">
                    <span
                      className="capitalize w-20 md:w-28 h-8 md:h-9 text-center shadow-tag rounded-md text-sm md:text-lg font-exo bg-grass flex items-center justify-center"
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
                      className={`flex items-center justify-center rounded-full h-6 w-6 text-lg ${filter === "grass" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center justify-end sm:justify-start w-full gap-2">
                    <span
                      className="capitalize w-20 md:w-28 h-8 md:h-9 text-center shadow-tag rounded-md text-sm md:text-lg font-exo bg-ice flex items-center justify-center"
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
                      className={`flex items-center justify-center rounded-full h-6 w-6 text-lg ${filter === "ice" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center justify-end sm:justify-start w-full gap-2">
                    <span
                      className="capitalize w-20 md:w-28 h-8 md:h-9 text-center shadow-tag rounded-md text-sm md:text-lg font-exo bg-poison flex items-center justify-center text-white"
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
                      className={`flex items-center justify-center rounded-full h-6 w-6 text-lg ${filter === "poison" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center justify-end sm:justify-start w-full gap-2">
                    <span
                      className="capitalize w-20 md:w-28 h-8 md:h-9 text-center shadow-tag rounded-md text-sm md:text-lg font-exo bg-rock flex items-center justify-center text-white"
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
                      className={`flex items-center justify-center rounded-full h-6 w-6 text-lg ${filter === "rock" ? "bg-sky-500" : "bg-neutral-100"}`}
                    >
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center justify-end sm:justify-start w-full gap-2">
                    <span
                      className="capitalize w-20 md:w-28 h-8 md:h-9 text-center shadow-tag rounded-md text-sm md:text-lg font-exo bg-water flex items-center justify-center text-white"
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
                      className={`flex items-center justify-center rounded-full h-6 w-6 text-lg ${filter === "water" ? "bg-sky-500" : "bg-neutral-100"}`}
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
                  className="flex w-10/12 justify-center items-center bg-red-500 hover:bg-red-600 transition-all p-3 rounded-md shadow-button gap-2 font-exo md:text-lg text-neutral-100"
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
                    size={20}
                  />
                  Search
                </button>
                <button
                  className="flex w-10/12 justify-center items-center bg-neutral-500 hover:bg-neutral-600 transition-all p-3 rounded-md shadow-button gap-2 font-exo md:text-lg text-neutral-100"
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
