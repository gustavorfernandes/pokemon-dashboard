/* eslint-disable @next/next/no-img-element */
import { Fire, X } from "phosphor-react"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export function Sidebar() {
  const { pokemonList, setListByType, setCurrentPokemonList, setInitial, setSearch }: any = useContext(GlobalContext)
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
    <div className="hidden lg:flex flex-col items-center w-3/12 xl:w-[320px] h-screen bg-neutral-800 z-30 select-none">
      <div>
        <img
          className="w-28 xl:w-36 mt-4 mb-10"
          src="/images/pokemon-logo.png"
          alt="Pokeball"
        />
      </div>
      <div className="w-full flex flex-col gap-4 pl-8 h-[75vh] overflow-y-scroll scrollbar-sideBar scrollbar-track-neutral-800 scrollbar-thumb-neutral-700 mb-8 mr-[6px]">
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
                setListByType(currentList)
                setCurrentPokemonList(currentList)
                setInitial(false)
                setIsActive("")
                setSearch("")
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
              setListByType(currentList)
              setCurrentPokemonList(currentList)
              setInitial(false)
            }}
          >
            Bug
          </button>
        </div>
        <div className="flex items-center gap-3 relative">
          {isActive === "electric" &&
            <button
              className="text-neutral-200 flex items-center justify-center absolute left-[18px]"
              onClick={() => {
                const currentList = searchByType("")
                setListByType(currentList)
                setCurrentPokemonList(currentList)
                setInitial(false)
                setIsActive("")
                setSearch("")
              }}
            >
              <X
                size={12}
              />
            </button>
          }
          <button
            className={`font-exo self-start ml-10 hover:text-neutral-200 transition-all text-sm ${isActive === "electric" ? "text-neutral-200" : "text-neutral-500"}`}
            onClick={() => {
              if (isActive != "electric") {
                setIsActive("electric")
              }
              const currentList = searchByType("electric")
              setListByType(currentList)
              setCurrentPokemonList(currentList)
              setInitial(false)
            }}
          >
            Electric
          </button>
        </div>
        <div className="flex items-center gap-3 relative">
          {isActive === "dragon" &&
            <button
              className="text-neutral-200 flex items-center justify-center absolute left-[18px]"
              onClick={() => {
                const currentList = searchByType("")
                setListByType(currentList)
                setCurrentPokemonList(currentList)
                setInitial(false)
                setIsActive("")
                setSearch("")
              }}
            >
              <X
                size={12}
              />
            </button>
          }
          <button
            className={`font-exo self-start ml-10 hover:text-neutral-200 transition-all text-sm ${isActive === "dragon" ? "text-neutral-200" : "text-neutral-500"}`}
            onClick={() => {
              if (isActive != "dragon") {
                setIsActive("dragon")
              }
              const currentList = searchByType("dragon")
              setListByType(currentList)
              setCurrentPokemonList(currentList)
              setInitial(false)
            }}
          >
            Dragon
          </button>
        </div>
        <div className="flex items-center gap-3 relative">
          {isActive === "fairy" &&
            <button
              className="text-neutral-200 flex items-center justify-center absolute left-[18px]"
              onClick={() => {
                const currentList = searchByType("")
                setListByType(currentList)
                setCurrentPokemonList(currentList)
                setInitial(false)
                setIsActive("")
                setSearch("")
              }}
            >
              <X
                size={12}
              />
            </button>
          }
          <button
            className={`font-exo self-start ml-10 hover:text-neutral-200 transition-all text-sm ${isActive === "fairy" ? "text-neutral-200" : "text-neutral-500"}`}
            onClick={() => {
              if (isActive != "fairy") {
                setIsActive("fairy")
              }
              const currentList = searchByType("fairy")
              setListByType(currentList)
              setCurrentPokemonList(currentList)
              setInitial(false)
            }}
          >
            Fairy
          </button>
        </div>
        <div className="flex items-center gap-3 relative">
          {isActive === "fighting" &&
            <button
              className="text-neutral-200 flex items-center justify-center absolute left-[18px]"
              onClick={() => {
                const currentList = searchByType("")
                setListByType(currentList)
                setCurrentPokemonList(currentList)
                setInitial(false)
                setIsActive("")
                setSearch("")
              }}
            >
              <X
                size={12}
              />
            </button>
          }
          <button
            className={`font-exo self-start ml-10 hover:text-neutral-200 transition-all text-sm ${isActive === "fighting" ? "text-neutral-200" : "text-neutral-500"}`}
            onClick={() => {
              if (isActive != "fighting") {
                setIsActive("fighting")
              }
              const currentList = searchByType("fighting")
              setListByType(currentList)
              setCurrentPokemonList(currentList)
              setInitial(false)
            }}
          >
            Fighting
          </button>
        </div>
        <div className="flex items-center gap-3 relative">
          {isActive === "fire" &&
            <button
              className="text-neutral-200 flex items-center justify-center absolute left-[18px]"
              onClick={() => {
                const currentList = searchByType("")
                setListByType(currentList)
                setCurrentPokemonList(currentList)
                setInitial(false)
                setIsActive("")
                setSearch("")
              }}
            >
              <X
                size={12}
              />
            </button>
          }
          <button
            className={`font-exo self-start ml-10 hover:text-neutral-200 transition-all text-sm ${isActive === "fire" ? "text-neutral-200" : "text-neutral-500"}`}
            onClick={() => {
              if (isActive != "fire") {
                setIsActive("fire")
              }
              const currentList = searchByType("fire")
              setListByType(currentList)
              setCurrentPokemonList(currentList)
              setInitial(false)
            }}
          >
            Fire
          </button>
        </div>
        <div className="flex items-center gap-3 relative">
          {isActive === "flying" &&
            <button
              className="text-neutral-200 flex items-center justify-center absolute left-[18px]"
              onClick={() => {
                const currentList = searchByType("")
                setListByType(currentList)
                setCurrentPokemonList(currentList)
                setInitial(false)
                setIsActive("")
                setSearch("")
              }}
            >
              <X
                size={12}
              />
            </button>
          }
          <button
            className={`font-exo self-start ml-10 hover:text-neutral-200 transition-all text-sm ${isActive === "flying" ? "text-neutral-200" : "text-neutral-500"}`}
            onClick={() => {
              if (isActive != "flying") {
                setIsActive("flying")
              }
              const currentList = searchByType("flying")
              setListByType(currentList)
              setCurrentPokemonList(currentList)
              setInitial(false)
            }}
          >
            Flying
          </button>
        </div>
        <div className="flex items-center gap-3 relative">
          {isActive === "ghost" &&
            <button
              className="text-neutral-200 flex items-center justify-center absolute left-[18px]"
              onClick={() => {
                const currentList = searchByType("")
                setListByType(currentList)
                setCurrentPokemonList(currentList)
                setInitial(false)
                setIsActive("")
                setSearch("")
              }}
            >
              <X
                size={12}
              />
            </button>
          }
          <button
            className={`font-exo self-start ml-10 hover:text-neutral-200 transition-all text-sm ${isActive === "ghost" ? "text-neutral-200" : "text-neutral-500"}`}
            onClick={() => {
              if (isActive != "ghost") {
                setIsActive("ghost")
              }
              const currentList = searchByType("ghost")
              setListByType(currentList)
              setCurrentPokemonList(currentList)
              setInitial(false)
            }}
          >
            Ghost
          </button>
        </div>
        <div className="flex items-center gap-3 relative">
          {isActive === "grass" &&
            <button
              className="text-neutral-200 flex items-center justify-center absolute left-[18px]"
              onClick={() => {
                const currentList = searchByType("")
                setListByType(currentList)
                setCurrentPokemonList(currentList)
                setInitial(false)
                setIsActive("")
                setSearch("")
              }}
            >
              <X
                size={12}
              />
            </button>
          }
          <button
            className={`font-exo self-start ml-10 hover:text-neutral-200 transition-all text-sm ${isActive === "grass" ? "text-neutral-200" : "text-neutral-500"}`}
            onClick={() => {
              if (isActive != "grass") {
                setIsActive("grass")
              }
              const currentList = searchByType("grass")
              setListByType(currentList)
              setCurrentPokemonList(currentList)
              setInitial(false)
            }}
          >
            Grass
          </button>
        </div>
        <div className="flex items-center gap-3 relative">
          {isActive === "ground" &&
            <button
              className="text-neutral-200 flex items-center justify-center absolute left-[18px]"
              onClick={() => {
                const currentList = searchByType("")
                setListByType(currentList)
                setCurrentPokemonList(currentList)
                setInitial(false)
                setIsActive("")
                setSearch("")
              }}
            >
              <X
                size={12}
              />
            </button>
          }
          <button
            className={`font-exo self-start ml-10 hover:text-neutral-200 transition-all text-sm ${isActive === "ground" ? "text-neutral-200" : "text-neutral-500"}`}
            onClick={() => {
              if (isActive != "ground") {
                setIsActive("ground")
              }
              const currentList = searchByType("ground")
              setListByType(currentList)
              setCurrentPokemonList(currentList)
              setInitial(false)
            }}
          >
            Ground
          </button>
        </div>
        <div className="flex items-center gap-3 relative">
          {isActive === "ice" &&
            <button
              className="text-neutral-200 flex items-center justify-center absolute left-[18px]"
              onClick={() => {
                const currentList = searchByType("")
                setListByType(currentList)
                setCurrentPokemonList(currentList)
                setInitial(false)
                setIsActive("")
                setSearch("")
              }}
            >
              <X
                size={12}
              />
            </button>
          }
          <button
            className={`font-exo self-start ml-10 hover:text-neutral-200 transition-all text-sm ${isActive === "ice" ? "text-neutral-200" : "text-neutral-500"}`}
            onClick={() => {
              if (isActive != "ice") {
                setIsActive("ice")
              }
              const currentList = searchByType("ice")
              setListByType(currentList)
              setCurrentPokemonList(currentList)
              setInitial(false)
            }}
          >
            Ice
          </button>
        </div>
        <div className="flex items-center gap-3 relative">
          {isActive === "normal" &&
            <button
              className="text-neutral-200 flex items-center justify-center absolute left-[18px]"
              onClick={() => {
                const currentList = searchByType("")
                setListByType(currentList)
                setCurrentPokemonList(currentList)
                setInitial(false)
                setIsActive("")
                setSearch("")
              }}
            >
              <X
                size={12}
              />
            </button>
          }
          <button
            className={`font-exo self-start ml-10 hover:text-neutral-200 transition-all text-sm ${isActive === "normal" ? "text-neutral-200" : "text-neutral-500"}`}
            onClick={() => {
              if (isActive != "normal") {
                setIsActive("normal")
              }
              const currentList = searchByType("normal")
              setListByType(currentList)
              setCurrentPokemonList(currentList)
              setInitial(false)
            }}
          >
            Normal
          </button>
        </div>
        <div className="flex items-center gap-3 relative">
          {isActive === "poison" &&
            <button
              className="text-neutral-200 flex items-center justify-center absolute left-[18px]"
              onClick={() => {
                const currentList = searchByType("")
                setListByType(currentList)
                setListByType(currentList)
                setCurrentPokemonList(currentList)
                setInitial(false)
                setIsActive("")
                setSearch("")
              }}
            >
              <X
                size={12}
              />
            </button>
          }
          <button
            className={`font-exo self-start ml-10 hover:text-neutral-200 transition-all text-sm ${isActive === "poison" ? "text-neutral-200" : "text-neutral-500"}`}
            onClick={() => {
              if (isActive != "poison") {
                setIsActive("poison")
              }
              const currentList = searchByType("poison")
              setListByType(currentList)
              setCurrentPokemonList(currentList)
              setInitial(false)
            }}
          >
            Poison
          </button>
        </div>
        <div className="flex items-center gap-3 relative">
          {isActive === "psychic" &&
            <button
              className="text-neutral-200 flex items-center justify-center absolute left-[18px]"
              onClick={() => {
                const currentList = searchByType("")
                setListByType(currentList)
                setCurrentPokemonList(currentList)
                setInitial(false)
                setIsActive("")
                setSearch("")
              }}
            >
              <X
                size={12}
              />
            </button>
          }
          <button
            className={`font-exo self-start ml-10 hover:text-neutral-200 transition-all text-sm ${isActive === "psychic" ? "text-neutral-200" : "text-neutral-500"}`}
            onClick={() => {
              if (isActive != "psychic") {
                setIsActive("psychic")
              }
              const currentList = searchByType("psychic")
              setListByType(currentList)
              setCurrentPokemonList(currentList)
              setInitial(false)
            }}
          >
            Psychic
          </button>
        </div>
        <div className="flex items-center gap-3 relative">
          {isActive === "rock" &&
            <button
              className="text-neutral-200 flex items-center justify-center absolute left-[18px]"
              onClick={() => {
                const currentList = searchByType("")
                setListByType(currentList)
                setCurrentPokemonList(currentList)
                setInitial(false)
                setIsActive("")
                setSearch("")
              }}
            >
              <X
                size={12}
              />
            </button>
          }
          <button
            className={`font-exo self-start ml-10 hover:text-neutral-200 transition-all text-sm ${isActive === "rock" ? "text-neutral-200" : "text-neutral-500"}`}
            onClick={() => {
              if (isActive != "rock") {
                setIsActive("rock")
              }
              const currentList = searchByType("rock")
              setListByType(currentList)
              setCurrentPokemonList(currentList)
              setInitial(false)
            }}
          >
            Rock
          </button>
        </div>
        <div className="flex items-center gap-3 relative">
          {isActive === "steel" &&
            <button
              className="text-neutral-200 flex items-center justify-center absolute left-[18px]"
              onClick={() => {
                const currentList = searchByType("")
                setListByType(currentList)
                setCurrentPokemonList(currentList)
                setInitial(false)
                setIsActive("")
                setSearch("")
              }}
            >
              <X
                size={12}
              />
            </button>
          }
          <button
            className={`font-exo self-start ml-10 hover:text-neutral-200 transition-all text-sm ${isActive === "steel" ? "text-neutral-200" : "text-neutral-500"}`}
            onClick={() => {
              if (isActive != "steel") {
                setIsActive("steel")
              }
              const currentList = searchByType("steel")
              setListByType(currentList)
              setCurrentPokemonList(currentList)
              setInitial(false)
            }}
          >
            Steel
          </button>
        </div>
        <div className="flex items-center gap-3 relative">
          {isActive === "water" &&
            <button
              className="text-neutral-200 flex items-center justify-center absolute left-[18px]"
              onClick={() => {
                const currentList = searchByType("")
                setListByType(currentList)
                setCurrentPokemonList(currentList)
                setInitial(false)
                setIsActive("")
                setSearch("")
              }}
            >
              <X
                size={12}
              />
            </button>
          }
          <button
            className={`font-exo self-start ml-10 hover:text-neutral-200 transition-all text-sm ${isActive === "water" ? "text-neutral-200" : "text-neutral-500"}`}
            onClick={() => {
              if (isActive != "water") {
                setIsActive("water")
              }
              const currentList = searchByType("water")
              setListByType(currentList)
              setCurrentPokemonList(currentList)
              setInitial(false)
            }}
          >
            Water
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
