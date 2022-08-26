/* eslint-disable @next/next/no-img-element */
import { Fire, X } from "phosphor-react"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export function Sidebar() {
  const { pokemonList, setCurrentPokemonList, setInitial }: any = useContext(GlobalContext)
  const [isActive, setIsActive] = useState("")

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
    <div className="hidden lg:flex flex-col items-center w-3/12 xl:w-[320px] h-screen bg-neutral-800 z-30">
      <div>
        <img
          className="w-28 xl:w-36 mt-4 mb-8"
          src="/images/pokemon-logo.png"
          alt="Pokeball"
        />
      </div>
      <div className="w-full flex flex-col gap-4 pl-8 h-[70vh] overflow-y-scroll scrollbar-thin mb-8">
        <h2 className="text-xs text-neutral-500 font-exo uppercase">
          Advanced Search
        </h2>
        <div className="flex items-center text-neutral-200 pl-4">
          <Fire />
          <span className="font-exo pl-2">
            Filter by Type
          </span>
        </div>
        <div className="flex items-center gap-3 relative">
          {isActive === "bug" &&
            <button
              className="text-neutral-200 flex items-center justify-center absolute left-[18px]"
              onClick={() => {
                const currentList = searchByType("")
                setCurrentPokemonList(currentList)
                setInitial(false)
                setIsActive("")
              }}
            >
              <X
                size={12}
              />
            </button>
          }
          <button
            className={`font-exo self-start ml-10 hover:text-neutral-200 transition-all text-sm ${isActive === "bug" ? "text-neutral-200" : "text-neutral-500"}`}
            onClick={() => {
              if (isActive != "bug") {
                setIsActive("bug")
              }
              const currentList = searchByType("bug")
              setCurrentPokemonList(currentList)
              setInitial(false)
            }}
          >
            Bug
          </button>
        </div>
        <button className="text-neutral-500 font-exo self-start pl-10 hover:text-neutral-200 transition-all text-sm">
          Dragon
        </button>
        <button className="text-neutral-500 font-exo self-start pl-10 hover:text-neutral-200 transition-all text-sm">
          Fairy
        </button>
        <button className="text-neutral-500 font-exo self-start pl-10 hover:text-neutral-200 transition-all text-sm">
          Fire
        </button>
        <button className="text-neutral-500 font-exo self-start pl-10 hover:text-neutral-200 transition-all text-sm">
          Ghost
        </button>
        <button className="text-neutral-500 font-exo self-start pl-10 hover:text-neutral-200 transition-all text-sm">
          Ground
        </button>
        <button className="text-neutral-500 font-exo self-start pl-10 hover:text-neutral-200 transition-all text-sm">
          Normal
        </button>
        <button className="text-neutral-500 font-exo self-start pl-10 hover:text-neutral-200 transition-all text-sm">
          Psychic
        </button>
        <button className="text-neutral-500 font-exo self-start pl-10 hover:text-neutral-200 transition-all text-sm">
          Steel
        </button>
        <button className="text-neutral-500 font-exo self-start pl-10 hover:text-neutral-200 transition-all text-sm">
          Dark
        </button>
        <button className="text-neutral-500 font-exo self-start pl-10 hover:text-neutral-200 transition-all text-sm">
          Electric
        </button>
        <button className="text-neutral-500 font-exo self-start pl-10 hover:text-neutral-200 transition-all text-sm">
          Fighting
        </button>
        <button className="text-neutral-500 font-exo self-start pl-10 hover:text-neutral-200 transition-all text-sm">
          Flying
        </button>
        <button className="text-neutral-500 font-exo self-start pl-10 hover:text-neutral-200 transition-all text-sm">
          Grass
        </button>
        <button className="text-neutral-500 font-exo self-start pl-10 hover:text-neutral-200 transition-all text-sm">
          Ice
        </button>
        <button className="text-neutral-500 font-exo self-start pl-10 hover:text-neutral-200 transition-all text-sm">
          Poison
        </button>
        <button className="text-neutral-500 font-exo self-start pl-10 hover:text-neutral-200 transition-all text-sm">
          Rock
        </button>
        <button className="text-neutral-500 font-exo self-start pl-10 hover:text-neutral-200 transition-all text-sm">
          Water
        </button>
      </div>
    </div>
  )
}

export default Sidebar
