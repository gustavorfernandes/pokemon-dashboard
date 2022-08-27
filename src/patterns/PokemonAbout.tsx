/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { CaretRight, CaretLeft } from "phosphor-react"

function PokemonAbout(props: any) {
  const pokemon = props.pokemon
  const description = props.description
  const strength = props.strength
  const weakness = props.weakness
  const weaknessNoDuplicates: string[] = []

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

  function toggleType(type: string, index: string) {
    const tagColor = type
    return (
      <span
        id={index}
        className={`capitalize py-1 px-3 w-[31.5%] lg:w-20 text-center shadow-tag rounded-md text-sm md:text-base lg:text-sm font-exo ${tagColor === "normal" && "bg-normal"} ${tagColor === "fighting" && "bg-fighting text-white"} ${tagColor === "flying" && "bg-flying"} ${tagColor === "poison" && "bg-poison text-white"} ${tagColor === "ground" && "bg-ground"} ${tagColor === "rock" && "bg-rock text-white"} ${tagColor === "bug" && "bg-bug text-white"} ${tagColor === "ghost" && "bg-ghost text-white"} ${tagColor === "steel" && "bg-steel"} ${tagColor === "fire" && "bg-fire text-white"} ${tagColor === "water" && "bg-water text-white"} ${tagColor === "grass" && "bg-grass"} ${tagColor === "electric" && "bg-electric"} ${tagColor === "psychic" && "bg-psychic text-white"} ${tagColor === "ice" && "bg-ice"} ${tagColor === "dragon" && "bg-dragon text-white"} ${tagColor === "dark" && "bg-dark text-white"} ${tagColor === "fairy" && "bg-fairy"}`}
        key={index}
      >
        {type}
      </span>
    )
  }

  function filterWeakness(type: string, index: string) {
    if (!weaknessNoDuplicates.toString().includes(type)) {
      weaknessNoDuplicates.push(type)
    }
  }

  function toggleWeakness(type: string, index: string) {
    const tagColor = type
    const strStrength = strength.toString()

    if (!strStrength.includes(tagColor)) {
      return (
        <span
          id={index}
          className={`capitalize py-1 px-3 w-[31.5%] lg:w-20 text-center shadow-tag rounded-md text-sm md:text-base lg:text-sm font-exo ${tagColor === "normal" && "bg-normal"} ${tagColor === "fighting" && "bg-fighting text-white"} ${tagColor === "flying" && "bg-flying"} ${tagColor === "poison" && "bg-poison text-white"} ${tagColor === "ground" && "bg-ground"} ${tagColor === "rock" && "bg-rock text-white"} ${tagColor === "bug" && "bg-bug text-white"} ${tagColor === "ghost" && "bg-ghost text-white"} ${tagColor === "steel" && "bg-steel"} ${tagColor === "fire" && "bg-fire text-white"} ${tagColor === "water" && "bg-water text-white"} ${tagColor === "grass" && "bg-grass"} ${tagColor === "electric" && "bg-electric"} ${tagColor === "psychic" && "bg-psychic text-white"} ${tagColor === "ice" && "bg-ice"} ${tagColor === "dragon" && "bg-dragon text-white"} ${tagColor === "dark" && "bg-dark text-white"} ${tagColor === "fairy" && "bg-fairy"}`}
          key={index}
        >
          {type}
        </span>
      )
    }
  }

  return (
    <div className="w-screen lg:w-full flex flex-col items-center justify-center lg:h-[calc(100vh-200px)]">
      <div className="bg-neutral-800 lg:bg-neutral-100 h-full lg:h-8 w-screen lg:w-full flex items-center justify-center">
        <div className="w-10/12 sm:w-9/12 md:w-8/12 lg:w-11/12 flex items-center justify-between py-6 lg:mt-8">
          <div className="w-6/12 flex items-center">
            {pokemon.id >= 2 &&
              <div className="bg-neutral-200 sm:p-1 rounded-lg shadow-button hover:scale-105 transition-all">
                <Link href={`/${pokemon.id - 1}`}>
                  <a className="rounded-lg p-2 flex justify-center items-center">
                    <CaretLeft
                      size={18}
                    />
                  </a>
                </Link>
              </div>
            }
          </div>
          <div className="w-6/12 flex items-center justify-end">
            {pokemon.id <= 150 &&
              <div className="bg-neutral-200 sm:p-1 rounded-lg shadow-button hover:scale-105 transition-all lg:mr-8">
                <Link href={`/${pokemon.id + 1}`}>
                  <a className="rounded-lg p-2 flex justify-center items-center">
                    <CaretRight
                      size={18}
                    />
                  </a>
                </Link>
              </div>
            }
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-screen lg:w-full mb-8">
        <div className="w-10/12 sm:w-9/12 md:w-8/12 lg:w-full flex items-center justify-center gap-4">
          <h2 className="text-3xl text-neutral-800 capitalize font-exo mt-8 lg:text-2xl">
            {pokemon.name}
          </h2>
          <span className="text-3xl text-neutral-600 capitalize font-exo mt-8 lg:text-2xl">
            {IDMask()}
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center w-10/12 sm:w-9/12 md:w-8/12 lg:w-8/12 lg:gap-4">
        <div className="flex items-center justify-center lg:w-6/12">
          <div className="flex items-center justify-center bg-neutral-100 lg:bg-neutral-200 rounded-md lg:w-full">
          <img
            className="w-full p-3"
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
            </div>
        </div>

        <div className="lg:w-6/12 lg:h-full lg:flex lg:flex-col lg:justify-between ">
          <div className="w-full flex items-center justify-center mt-8 lg:mt-0">
            <p className="font-exo tracking-wide leading-7 text-neutral-800 text-base md:text-lg lg:text-sm">
              {description}
            </p>
          </div>

          <div className="w-full flex flex-col justify-start gap-4 lg:gap-2 my-8 lg:my-0 lg:mt-4">
            <span className="text-2xl font-exo text-neutral-700 lg:text-lg">
              Type
            </span>

            <div className="w-full flex gap-2">
              {pokemon.types.map((item: any) => (
                toggleType(item.type.name, item.type.name)
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col justify-start gap-3 lg:gap-2 mb-8 lg:mt-4 lg:mb-4">
            <span className="text-2xl font-exo text-neutral-700 lg:text-lg">
              Weakness
            </span>

            {weakness.map((type: string) => (
              filterWeakness(type, type)
            ))}

            <div className="w-full flex flex-wrap gap-2">
              {weaknessNoDuplicates.map((type: string) => (
                toggleWeakness(type, type)
              ))}
            </div>
          </div>

          <div className="w-full sm:max-w-xs flex items-center justify-center lg:justify-start mt-4 lg:mt-8">
            <Link href={"/"}>
              <a className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 py-2 rounded transition-all shadow-button text-white font-exo text-lg lg:text-sm lg:w-48">
                Explore more Pokémon
              </a>
            </Link>
          </div>
        </div>
      </div >
    </div>
  )
}

export default PokemonAbout
