import Sidebar from "../components/Sidebar"
import Footer from "../patterns/Footer"
import Header from "../patterns/Header"
import PokemonAbout from "../patterns/PokemonAbout"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export function PokemonScreen(props: any) {
  const { setSelectList, setSearch, setPokemonCard, options }: any = useContext(GlobalContext)

  setPokemonCard(true)
  setSearch("")
  setSelectList(options[0])

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full flex-col items-center">
          <Header />
          <PokemonAbout pokemons={props.pokemons} pokemon={props.pokemon} description={props.description} strength={props.strength} weakness={props.weakness} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PokemonScreen
