/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import axios from "axios"
import { useEffect, useState } from "react"

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

function PokemonAbout(props: any) {
  const [data, setData] = useState<Pokemon>(initPokemon)
  const slug = props.name

  useEffect(() => {
    axios({
      method: "get",
      url: `https://pokeapi.co/api/v2/pokemon/${slug}/`,
    }).then(function (response) {
      setData(response.data)
      console.log(response.data)
    }).catch(function (error) {
      console.log(error.data)
    })

    return function cleanUp() {
      setData(initPokemon)
    }
  }, [slug])

  function IDMask() {
    if (data) {
      const pokeId = parseInt(data.id)
      let idToString = `#${data.id}`

      if (pokeId < 10) {
        idToString = `#00${pokeId}`
      } else if (pokeId >= 10 && pokeId < 100) {
        idToString = `#0${pokeId}`
      }
      return idToString
    }
  }

  return (
    <div className="w-screen flex flex-col items-center justify-center">

      {slug &&
        <div className="flex items-center justify-center gap-4">
          <h2 className="text-3xl text-neutral-800 capitalize font-exo mt-16">
            {data.name}
          </h2>
          <span className="text-3xl text-neutral-600 capitalize font-exo mt-16">
            {IDMask()}
          </span>
        </div>
      }

      <div className="flex gap-2 justify-center my-8">
        {data.types.map((item, index) => (
          <span className="py-1 px-3 w-28 text-center bg-green-400 rounded-xl font-exo" key={index}>
            {item.type.name}
          </span>
        ))}
      </div>

      <div className="flex flex-col w-10/12 bg-neutral-100 rounded-md p-3">
        <img
          src={data.sprites.other["official-artwork"].front_default}
          alt={data.name}
        />
      </div>
      <div className="w-10/12 flex items-center justify-center mt-12">
        <button className="w-full bg-green-600 hover:bg-green-700 py-2 rounded transition-all shadow-button text-white font-exo text-lg">
          <Link href={"/"}>
            <a>
              Explore more Pokémon
            </a>
          </Link>
        </button>
      </div>

    </div>
  )
}

export default PokemonAbout
