import Sidebar from "../components/Sidebar"
import Footer from "../patterns/Footer"
import Header from "../patterns/Header"
import PokemonAbout from "../patterns/PokemonAbout"

export function DashboardScreen(props: any) {

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full flex-col items-center">
          <Header />
          <PokemonAbout pokemon={props.pokemon} description={props.description} strength={props.strength} weakness={props.weakness} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DashboardScreen
