/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import axios from "axios"
import { useEffect, useState } from "react"

type Pokemon = typeof initPokemon
type Species = typeof initSpecies

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

const initSpecies = {
  flavor_text_entries: [
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    },
    {
      flavor_text: ""
    }
  ]
}

function PokemonAbout(props: any) {
  const [data, setData] = useState<Pokemon>(initPokemon)
  const [species, setSpecies] = useState<Species>(initSpecies)
  const slug = props.name

  async function getPokemonData() {
    await axios({
      method: "get",
      url: `https://pokeapi.co/api/v2/pokemon/${slug}/`,
    }).then(function (response) {
      setData(response.data)
      console.log(response.data)
    }).catch(function (error) {
      console.log(error.data)
    })

    await axios({
      method: "get",
      url: `https://pokeapi.co/api/v2/pokemon-species/${slug}/`,
    }).then(function (response) {
      setSpecies(response.data)
    }).catch(function (error) {
      console.log(error.data)
    })
  }

  useEffect(() => {
    getPokemonData()
    setData(initPokemon)
    setSpecies(initSpecies)
  }, [])

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

  function toggleColor(type: string, index: string) {
    const tagColor = type
    return (
      <span
        id={index}
        className={`capitalize py-1 px-3 w-28 text-center rounded-xl font-exo ${tagColor === "normal" && "bg-normal"} ${tagColor === "fighting" && "bg-fighting text-white"} ${tagColor === "flying" && "bg-flying"} ${tagColor === "poison" && "bg-poison text-white"} ${tagColor === "ground" && "bg-ground"} ${tagColor === "rock" && "bg-rock text-white"} ${tagColor === "bug" && "bg-bug text-white"} ${tagColor === "ghost" && "bg-ghost text-white"} ${tagColor === "steel" && "bg-steel"} ${tagColor === "fire" && "bg-fire text-white"} ${tagColor === "water" && "bg-water text-white"} ${tagColor === "grass" && "bg-grass"} ${tagColor === "eletric" && "bg-eletric"} ${tagColor === "psychic" && "bg-psychic text-white"} ${tagColor === "ice" && "bg-ice"} ${tagColor === "dragon" && "bg-dragon text-white"} ${tagColor === "dark" && "bg-dark text-white"} ${tagColor === "fairy" && "bg-fairy"}`}
        key={index}
      >
        {type}
      </span>
    )
  }

  return (
    <div className="w-screen flex flex-col items-center justify-center">

      {slug &&
        <>
          <div className="w-10/12 flex items-center justify-center gap-4 mb-6">
            <h2 className="text-3xl text-neutral-800 capitalize font-exo mt-16">
              {data.name}
            </h2>
            <span className="text-3xl text-neutral-600 capitalize font-exo mt-16">
              {IDMask()}
            </span>
          </div>

          <div className="flex flex-col w-10/12 bg-neutral-100 rounded-md p-3">
            <img
              src={data.sprites.other["official-artwork"].front_default}
              alt={data.name}
            />
          </div>

          <div className="w-10/12 flex items-center justify-center mt-12">
            <p className="font-exo tracking-wide leading-7 text-neutral-800 text-lg">
              {species.flavor_text_entries[21].flavor_text}
            </p>
          </div>

          <div className="w-10/12 flex flex-col justify-start gap-4 my-8">
            <span className="text-2xl font-exo text-neutral-700">
              Type
            </span>

            <div className="w-full flex gap-4">
              {data.types.map((item) => (
                toggleColor(item.type.name, item.type.name)
              ))}
            </div>
          </div>
        </>
      }

      <div className="w-10/12 flex items-center justify-center mt-4">
        <button className="w-full bg-green-600 hover:bg-green-700 py-2 rounded transition-all shadow-button text-white font-exo text-lg">
          <Link href={"/"}>
            <a>
              Explore more Pokémon
            </a>
          </Link>
        </button>
      </div>

    </div >
  )
}

export default PokemonAbout
