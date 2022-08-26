/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { AnimatePresence, motion } from "framer-motion"
import { CaretUp } from "phosphor-react"
import { useEffect, useState } from "react"
import PokemonCard from "../components/PokemonCard"
import Search from "../components/Search"

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
}

function PokemonList(props: any) {
  const [scrollDown, setScrollDown] = useState(false)


  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrollDown(true)
    } else {
      setScrollDown(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div className="w-screen lg:w-full flex flex-col items-center justify-center lg:bg-neutral-100">
      <div className="w-10/12 flex flex-col items-center justify-center mt-4 lg:mt-0 lg:hidden">
        <div className="w-screen bg-neutral-800 lg:bg-neutral-100 py-4 mb-8 flex flex-col items-center justify-center gap-4">
          <div className="w-10/12 flex flex-col lg:flex-row lg:gap-4 justify-center lg:justify-start">
            <h1 className="w-9/12 font-exo font-light text-3xl md:text-4xl text-neutral-100 mb-2">
              Pokédex
            </h1>

            <h2 className="w-10/12 md:w-5/12 text-base md:text-lg text-neutral-200 my-4 font-roboto font-light">
              Search for a Pokémon by name or using its National Pokédex number.
            </h2>

            <Search pokemons={props.pokemons} pokemonsObject={props.pokemonsObject} />
          </div>
        </div>
      </div>
      <PokemonCard pokemons={props.pokemons} pokemonsObject={props.pokemonsObject} />

      <AnimatePresence>
        {scrollDown &&
          <motion.div
            className="fixed flex items-center justify-center w-16 h-16 bg-neutral-500 bottom-0 right-0 rounded-tl-md opacity-70 z-10 text-white shadow-button lg:hidden"
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            exit={{ y: 150 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="w-full h-full flex items-center justify-center select-none"
              onClick={handleScrollTop}
            >
              <CaretUp
                size={48}
                weight="bold"
              />
            </button>
          </motion.div>
        }
      </AnimatePresence>
    </div >
  )
}

export default PokemonList
