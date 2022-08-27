import Sidebar from "../components/Sidebar"
import Footer from "../patterns/Footer"
import Header from "../patterns/Header"
import PokemonList from "../patterns/PokemonList"

export function DashboardScreen(props: any) {

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full flex-col items-center">
          <Header />
          <PokemonList pokemons={props.pokemons} pokemonsObject={props.pokemonsObject} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DashboardScreen
