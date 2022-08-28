/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { CaretRight, CaretLeft } from "phosphor-react"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function PokemonAbout(props: any) {
  const { setCurrentPokemonList, setPokemonCard, setInitial, setOrder, setFilterOrder }: any = useContext(GlobalContext)
  const pokemons = props.pokemons
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
        className={`capitalize py-1 px-3 w-[31.5%] lg:w-16 lg:h-5 lg:py-0 lg:pt-[2px] text-center shadow-tag rounded-md text-sm md:text-base lg:text-xs font-exo ${tagColor === "normal" && "bg-normal"} ${tagColor === "fighting" && "bg-fighting text-white"} ${tagColor === "flying" && "bg-flying"} ${tagColor === "poison" && "bg-poison text-white"} ${tagColor === "ground" && "bg-ground"} ${tagColor === "rock" && "bg-rock text-white"} ${tagColor === "bug" && "bg-bug text-white"} ${tagColor === "ghost" && "bg-ghost text-white"} ${tagColor === "steel" && "bg-steel"} ${tagColor === "fire" && "bg-fire text-white"} ${tagColor === "water" && "bg-water text-white"} ${tagColor === "grass" && "bg-grass"} ${tagColor === "electric" && "bg-electric"} ${tagColor === "psychic" && "bg-psychic text-white"} ${tagColor === "ice" && "bg-ice"} ${tagColor === "dragon" && "bg-dragon text-white"} ${tagColor === "dark" && "bg-dark text-white"} ${tagColor === "fairy" && "bg-fairy"}`}
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
          className={`capitalize py-1 px-3 w-[31.5%] lg:w-16 lg:h-5 lg:py-0 lg:pt-[2px] text-center shadow-tag rounded-md text-sm md:text-base lg:text-xs font-exo ${tagColor === "normal" && "bg-normal"} ${tagColor === "fighting" && "bg-fighting text-white"} ${tagColor === "flying" && "bg-flying"} ${tagColor === "poison" && "bg-poison text-white"} ${tagColor === "ground" && "bg-ground"} ${tagColor === "rock" && "bg-rock text-white"} ${tagColor === "bug" && "bg-bug text-white"} ${tagColor === "ghost" && "bg-ghost text-white"} ${tagColor === "steel" && "bg-steel"} ${tagColor === "fire" && "bg-fire text-white"} ${tagColor === "water" && "bg-water text-white"} ${tagColor === "grass" && "bg-grass"} ${tagColor === "electric" && "bg-electric"} ${tagColor === "psychic" && "bg-psychic text-white"} ${tagColor === "ice" && "bg-ice"} ${tagColor === "dragon" && "bg-dragon text-white"} ${tagColor === "dark" && "bg-dark text-white"} ${tagColor === "fairy" && "bg-fairy"}`}
          key={index}
        >
          {type}
        </span>
      )
    }
  }

  return (
    <div className="w-screen lg:w-11/12 flex flex-col items-center justify-center lg:h-[calc(100vh-200px)]">
      <div className="bg-neutral-800 lg:bg-neutral-100 h-full lg:h-8 w-screen lg:w-full flex items-center justify-center">
        <div className="w-10/12 sm:w-9/12 md:w-8/12 lg:w-full lg:max-w-[45rem] flex items-center justify-between py-6 lg:py-0 lg:mt-0 lg:mb-4">
          {pokemon.id >= 2 &&
            <Link href={`/${pokemon.id - 1}`}>
              <a>
                <div className="flex items-center justify-center bg-neutral-200 w-10 h-10 rounded-lg shadow-button hover:scale-105 transition-all">
                  <CaretLeft
                    size={16}
                  />
                </div>
              </a>
            </Link>
          }
          <div className="w-10 h-10" />
          {pokemon.id <= 150 &&
            <Link href={`/${pokemon.id + 1}`}>
              <a>
                <div className="flex items-center justify-center bg-neutral-200 w-10 h-10 rounded-lg shadow-button hover:scale-105 transition-all">
                  <CaretRight
                    size={16}
                  />
                </div>
              </a>
            </Link>
          }
        </div>
      </div>

      <div className="flex items-center justify-center w-screen lg:w-full mb-8">
        <div className="w-10/12 sm:w-9/12 md:w-8/12 lg:w-full lg:max-w-[45rem] flex items-center justify-center gap-4">
          <h2 className="text-3xl text-neutral-800 capitalize font-exo mt-8 lg:mt-0 lg:text-2xl">
            {pokemon.name}
          </h2>
          <span className="text-3xl text-neutral-600 capitalize font-exo mt-8 lg:mt-0 lg:text-2xl">
            {IDMask()}
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start w-10/12 sm:w-9/12 md:w-8/12 lg:w-8/12 lg:max-w-[45rem] lg:gap-4">
        <div className="flex items-center justify-center lg:w-6/12">
          <div className="flex items-center justify-center bg-neutral-100 lg:bg-neutral-200 rounded-md lg:w-full lg:max-w-[15rem] ">
            <img
              className="w-full p-3"
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
            />
          </div>
        </div>

        <div className="lg:w-6/12 lg:flex lg:flex-col lg:justify-between ">
          <div className="w-full flex items-center justify-center lg:items-start mt-8 lg:mt-0 lg:min-h-[5rem]">
            <p className="font-exo tracking-wide leading-7 text-neutral-800 text-base md:text-lg lg:text-xs">
              {description}
            </p>
          </div>

          <div className="w-full flex flex-col justify-start gap-4 lg:gap-1 my-8 lg:my-0 lg:mt-4">
            <span className="text-2xl font-exo text-neutral-700 lg:text-base">
              Type
            </span>

            <div className="w-full flex lg:items-center gap-2 lg:gap-1">
              {pokemon.types.map((item: any) => (
                toggleType(item.type.name, item.type.name)
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col justify-start gap-3 lg:gap-1 mb-8 lg:mt-4 lg:mb-0 lg:min-h-[4.75rem]">
            <span className="text-2xl font-exo text-neutral-700 lg:text-lg">
              Weakness
            </span>

            {weakness.map((type: string) => (
              filterWeakness(type, type)
            ))}

            <div className="w-full flex flex-wrap gap-2 lg:gap-1">
              {weaknessNoDuplicates.map((type: string) => (
                toggleWeakness(type, type)
              ))}
            </div>
          </div>                   
        </div>        
      </div >
      <div className="w-full lg:w-11/12 lg:max-w-[45rem] flex items-center justify-center lg:justify-end mt-4">
            <Link href={"/"}>
              <a
                className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 py-2 rounded 
                transition-all shadow-button text-white font-exo text-lg lg:text-xs lg:w-44"
                onClick={() => {
                  setCurrentPokemonList(pokemons)
                  setPokemonCard(false)
                  setInitial(true)
                  setOrder(1)
                  setFilterOrder("number")
                }}
              >
                Explore more Pokémon
              </a>
            </Link>
          </div>
    </div>
  )
}

export default PokemonAbout
