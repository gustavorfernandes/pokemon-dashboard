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
    <div
      className="w-screen flex flex-col items-center justify-center">
      <div className="w-10/12 flex flex-col items-center justify-center mt-8">
        <div className="w-screen bg-neutral-800 py-4 mb-8 flex flex-col items-center justify-center gap-4">
          <div className="w-10/12 flex flex-col justify-center">
            <h1 className="w-9/12 font-exo font-light text-3xl text-neutral-100 mb-2">
              Pokédex
            </h1>

            <h2 className="w-10/12 text-base text-neutral-200 my-4 font-roboto font-light">
              Search for a Pokémon by name or using its National Pokédex number.
            </h2>

            <Search />
          </div>
        </div>
      </div>
      <PokemonCard pokemons={props.pokemons} />

      <AnimatePresence>
        {scrollDown &&
          <motion.div
            className="fixed flex items-center justify-center w-16 h-16 bg-neutral-500 bottom-0 right-0 rounded-tl-md opacity-70 z-10 text-white shadow-button"
            initial={{  y: 250 }}
            animate={{ y: 0 }}
            exit={{ y: 250 }}
            transition={{ duration: 0.3 }}
          >
              <button className="">
                <CaretUp
                  size={48}
                  weight="bold"
                  onClick={handleScrollTop}
                />
              </button>
          </motion.div>
        }
      </AnimatePresence>
    </div >
  )
}

export default PokemonList
