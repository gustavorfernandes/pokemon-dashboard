/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

function PokemonAbout(props: any) {
  const pokemon = props.pokemon
  const [description, setDescription] = useState("")
  console.log(pokemon)

  function IDMask() {
    if (pokemon) {
      const pokeId = parseInt(pokemon.id)
      let idToString = `#${pokemon.id}`

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
        className={`capitalize py-1 px-3 w-28 text-center rounded-xl font-exo ${tagColor === "normal" && "bg-normal"} ${tagColor === "fighting" && "bg-fighting text-white"} ${tagColor === "flying" && "bg-flying"} ${tagColor === "poison" && "bg-poison text-white"} ${tagColor === "ground" && "bg-ground"} ${tagColor === "rock" && "bg-rock text-white"} ${tagColor === "bug" && "bg-bug text-white"} ${tagColor === "ghost" && "bg-ghost text-white"} ${tagColor === "steel" && "bg-steel"} ${tagColor === "fire" && "bg-fire text-white"} ${tagColor === "water" && "bg-water text-white"} ${tagColor === "grass" && "bg-grass"} ${tagColor === "electric" && "bg-electric"} ${tagColor === "psychic" && "bg-psychic text-white"} ${tagColor === "ice" && "bg-ice"} ${tagColor === "dragon" && "bg-dragon text-white"} ${tagColor === "dark" && "bg-dark text-white"} ${tagColor === "fairy" && "bg-fairy"}`}
        key={index}
      >
        {type}
      </span>
    )
  }

  async function getDescription() {
    const res = await axios.get(pokemon.species.url)
      .then((response) => {
        return response.data.flavor_text_entries[10].flavor_text
      })
      .catch((error) => {
        console.log(error)
      })
    setDescription(res)
  }

  useEffect(() => {
    getDescription()
  }, [])

  return (
    <div className="w-screen flex flex-col items-center justify-center">

      <div className="w-10/12 flex items-center justify-between mt-8">
        <button className="w-6/12 flex items-center">
          {pokemon.id > 1 &&
            <Link href={`${parseInt(pokemon.id) - 1}`}>
              <a>
                Prev
              </a>
            </Link>
          }
        </button>
        <button className="w-6/12 flex items-center justify-end">
         {pokemon.id < 251 &&
           <Link href={`${parseInt(pokemon.id) + 1}`}>
           <a>
             Next
           </a>
         </Link>         
         }
        </button>
      </div>


      <div className="w-10/12 flex items-center justify-center gap-4 mb-6">
        <h2 className="text-3xl text-neutral-800 capitalize font-exo mt-8">
          {pokemon.name}
        </h2>
        <span className="text-3xl text-neutral-600 capitalize font-exo mt-8">
          {IDMask()}
        </span>
      </div>

      <div className="flex flex-col w-10/12 bg-neutral-100 rounded-md p-3">
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />
      </div>

      <div className="w-10/12 flex items-center justify-center mt-12">
        <p className="font-exo tracking-wide leading-7 text-neutral-800 text-lg">
          {description}
        </p>
      </div>

      <div className="w-10/12 flex flex-col justify-start gap-4 my-8">
        <span className="text-2xl font-exo text-neutral-700">
          Type
        </span>

        <div className="w-full flex gap-4">
          {pokemon.types.map((item: any) => (
            toggleColor(item.type.name, item.type.name)
          ))}
        </div>
      </div>

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
