/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import axios from "axios"
import { useEffect, useState } from "react"

type Pokemon = typeof initPokemon
const initPokemon = {
  order: "",
  name: "",
  types: [
    {
      type: {
        name: ""
      }
    }
  ]
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

  return (
    <div className="w-screen flex flex-col items-center justify-center">

      {slug &&
        <div className="flex items-center justify-center gap-4">
          <h2 className="text-4xl text-neutral-800 capitalize font-exo mt-16">
            {data.name}
          </h2>
          <span className="text-4xl text-neutral-800 capitalize font-exo mt-16">
            {`#${data.order}`}
          </span>
        </div>
      }

      <div className="flex flex-col gap-2 justify-center mt-8">
        {data.types.map((item, index) => (
          <span key={index}>
            {item.type.name}
          </span>
        ))}

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
