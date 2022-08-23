/* eslint-disable @next/next/no-img-element */
import { GoSearch } from "@react-icons/all-files/go/GoSearch"
import { AnimatePresence, motion } from "framer-motion"
import { CaretLeft, FunnelSimple } from "phosphor-react"
import { useState } from "react"

function Header() {
  const [isOpen, setOpen] = useState(false)
  const [filter, setFilter] = useState("")

  function toggleMenu() {
    setOpen(!isOpen)
  }

  function toggleTag(type: string) {
    const filterType = type
    setFilter(filterType)
  }

  return (
    <>
      <div className="w-screen flex flex-col items-center justify-center pt-4">
        <div className="w-10/12 flex items-center justify-between">
          <img
            className="w-20 justify-self-center"
            src="/images/pokemon-logo.png"
            alt="Pokémon Logo"
          />

          <button
            className="font-bold text-neutral-800 flex items-center -justify-center"
            onClick={toggleMenu}
          >
            <FunnelSimple
              className="bg-neutral-200 rounded-md shadow-button hover:scale-105 transition-all p-[10px] w-11 h-11"
              size={30}
              weight="bold"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen &&


          <motion.div
            className="bg-neutral-700 flex flex-col items-center fixed rounded-sm w-[88%] sm:w-7/12 sm:max-w-[380px] z-20 right-0 inset-y-0 shadow-button select-none"
            initial={{ x: 500 }}
            animate={{ x: - 0 }}
            exit={{ x: 500 }}
            transition={{ duration: 0.35 }}
          >

            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full flex flex-col justify-center relative">
                <div className="flex w-12 h-14 items-center justify-center absolute -left-9 top-0 bg-neutral-700 rounded-tl-lg rounded-bl-lg ">
                  <button
                    className="text-white mr-2"
                    onClick={toggleMenu}
                  >
                    <CaretLeft
                      size={20}
                      weight="bold"
                    />
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center mt-4 text-neutral-100 font-exo">
                <h2 className="text-md text-white">
                  Advanced Search
                </h2>
              </div>

              <div className="w-full flex items-center justify-center mt-10 mb-4 bg-neutral-700">
                <div className="w-10/12 flex flex-col justify-center">
                  <span className="font-light text-2xl font-exo text-neutral-100">
                    Filter by Type
                  </span>
                  <span className="font-light text-xs font-exo text-neutral-200 mt-1">
                    T = Type
                  </span>
                </div>

              </div>

              <div className="w-10/12 flex items-center justify-between mt-2 font-exo text-2xl gap-2">
                <div className="w-6/12 flex flex-col justify-center items-center gap-2">
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-20 h-8 text-center shadow-tag rounded-md text-sm font-exo bg-bug flex items-center justify-center text-white"
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
                      className="capitalize w-20 h-8 text-center shadow-tag rounded-md text-sm font-exo bg-dragon flex items-center justify-center text-white"
                    >
                      Dragon
                    </span>
                    <button className="flex items-center justify-center rounded-full bg-neutral-100 h-6 w-6 text-lg">
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-20 h-8 text-center shadow-tag rounded-md text-sm font-exo bg-fairy flex items-center justify-center"
                    >
                      Fairy
                    </span>
                    <button className="flex items-center justify-center rounded-full bg-neutral-100 h-6 w-6 text-lg">
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-20 h-8 text-center shadow-tag rounded-md text-sm font-exo bg-fire flex items-center justify-center text-white"
                    >
                      Fire
                    </span>
                    <button className="flex items-center justify-center rounded-full bg-neutral-100 h-6 w-6 text-lg">
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-20 h-8 text-center shadow-tag rounded-md text-sm font-exo bg-ghost flex items-center justify-center text-white"
                    >
                      Ghost
                    </span>
                    <button className="flex items-center justify-center rounded-full bg-neutral-100 h-6 w-6 text-lg">
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-20 h-8 text-center shadow-tag rounded-md text-sm font-exo bg-ground flex items-center justify-center"
                    >
                      Ground
                    </span>
                    <button className="flex items-center justify-center rounded-full bg-neutral-100 h-6 w-6 text-lg">
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-20 h-8 text-center shadow-tag rounded-md text-sm font-exo bg-normal flex items-center justify-center"
                    >
                      Normal
                    </span>
                    <button className="flex items-center justify-center rounded-full bg-neutral-100 h-6 w-6 text-lg">
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-20 h-8 text-center shadow-tag rounded-md text-sm font-exo bg-psychic flex items-center justify-center text-white"
                    >
                      Psychic
                    </span>
                    <button className="flex items-center justify-center rounded-full bg-neutral-100 h-6 w-6 text-lg">
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span
                      className="capitalize w-20 h-8 text-center shadow-tag rounded-md text-sm font-exo bg-steel flex items-center justify-center"
                    >
                      Steel
                    </span>
                    <button className="flex items-center justify-center rounded-full bg-neutral-100 h-6 w-6 text-lg">
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                </div>
                <div className="w-6/12 flex flex-col justify-center items-center gap-2">
                  <div className="flex items-center justify-end w-full gap-2">
                    <span
                      className="capitalize w-20 h-8 text-center shadow-tag rounded-md text-sm font-exo bg-dark flex items-center justify-center text-white"
                    >
                      Dark
                    </span>
                    <button className="flex items-center justify-center rounded-full bg-neutral-100 h-6 w-6 text-lg">
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center justify-end w-full gap-2">
                    <span
                      className="capitalize w-20 h-8 text-center shadow-tag rounded-md text-sm font-exo bg-electric flex items-center justify-center"
                    >
                      Electric
                    </span>
                    <button className="flex items-center justify-center rounded-full bg-neutral-100 h-6 w-6 text-lg">
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center justify-end w-full gap-2">
                    <span
                      className="capitalize w-20 h-8 text-center shadow-tag rounded-md text-sm font-exo bg-fighting flex items-center justify-center text-white"
                    >
                      Fighting
                    </span>
                    <button className="flex items-center justify-center rounded-full bg-neutral-100 h-6 w-6 text-lg">
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center justify-end w-full gap-2">
                    <span
                      className="capitalize w-20 h-8 text-center shadow-tag rounded-md text-sm font-exo bg-flying flex items-center justify-center"
                    >
                      Flying
                    </span>
                    <button className="flex items-center justify-center rounded-full bg-neutral-100 h-6 w-6 text-lg">
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center justify-end w-full gap-2">
                    <span
                      className="capitalize w-20 h-8 text-center shadow-tag rounded-md text-sm font-exo bg-grass flex items-center justify-center"
                    >
                      Grass
                    </span>
                    <button className="flex items-center justify-center rounded-full bg-neutral-100 h-6 w-6 text-lg">
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center justify-end w-full gap-2">
                    <span
                      className="capitalize w-20 h-8 text-center shadow-tag rounded-md text-sm font-exo bg-ice flex items-center justify-center"
                    >
                      Ice
                    </span>
                    <button className="flex items-center justify-center rounded-full bg-neutral-100 h-6 w-6 text-lg">
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center justify-end w-full gap-2">
                    <span
                      className="capitalize w-20 h-8 text-center shadow-tag rounded-md text-sm font-exo bg-poison flex items-center justify-center text-white"
                    >
                      Poison
                    </span>
                    <button className="flex items-center justify-center rounded-full bg-neutral-100 h-6 w-6 text-lg">
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center justify-end w-full gap-2">
                    <span
                      className="capitalize w-20 h-8 text-center shadow-tag rounded-md text-sm font-exo bg-rock flex items-center justify-center text-white"
                    >
                      Rock
                    </span>
                    <button className="flex items-center justify-center rounded-full bg-neutral-100 h-6 w-6 text-lg">
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center justify-end w-full gap-2">
                    <span
                      className="capitalize w-20 h-8 text-center shadow-tag rounded-md text-sm font-exo bg-water flex items-center justify-center text-white"
                    >
                      Water
                    </span>
                    <button className="flex items-center justify-center rounded-full bg-neutral-100 h-6 w-6 text-lg">
                      <span className="font-bold pt-1 text-neutral-800">
                        T
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col items-center justify-center mt-8 gap-4">
                <button
                  className="flex w-10/12 justify-center items-center bg-red-500 hover:bg-red-600 transition-all p-3 rounded-md shadow-button gap-2 font-exo text-neutral-100"
                  type="submit"
                >
                  <GoSearch
                    color="white"
                    size={20}
                  />
                  Search
                </button>
                <button
                  className="flex w-10/12 justify-center items-center bg-neutral-500 hover:bg-neutral-600 transition-all p-3 rounded-md shadow-button gap-2 font-exo text-neutral-100"
                  type="submit"
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
