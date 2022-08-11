/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { GlobalContext } from "../contexts/GlobalContext"
import { useContext, useEffect } from "react"

type Pokemon = typeof initPokemon

const initPokemon = {
  id: "",
  name: "",
  types: [
    {
      type: {
        name: ""
      }
    }
  ],
  sprites: {
    other: {
      ["official-artwork"]: {
        "front_default": ""
      }
    }
  }
}

function PokemonCard() {
  const pokemonName = "Bulbasaur"
  const { fetchPokemon, list }: any = useContext(GlobalContext)
  
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-10/12 flex flex-col justify-center gap-2 font-exo select-none">
        <div className="w-full bg-neutral-100 p-8 rounded-lg flex items-center justify-center mb-2">
          <Link href={pokemonName}>
            <a>
              <img
                className="w-full"
                src="/images/bulba.png"
                alt={pokemonName}
              />
            </a>
          </Link>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col gap-2 justify-center">
            <span className="self-start text-neutral-700 font-light">
              {"n 001"}
            </span>
            <h2 className="capitalize text-3xl text-neutral-800 font-bold">
              {pokemonName}
            </h2>
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <span className="py-1 px-3 w-28 text-center bg-green-400 rounded-xl">
              Grass
            </span>
            <span className="py-1 px-3 w-28 text-center bg-fuchsia-400 rounded-xl text-neutral-200">
              Poison
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
