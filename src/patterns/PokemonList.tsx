import { GoSearch } from "@react-icons/all-files/go/GoSearch"
import PokemonCard from "../components/PokemonCard"

function PokemonList() {
  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <div className="w-11/12 flex flex-col items-center justify-center mt-8">
        <div className="w-screen bg-neutral-800 py-4 mb-16 flex flex-col items-center justify-center gap-4">
          <div className="w-11/12 flex flex-col justify-center">
            <h1 className="w-10/12 font-sans text-3xl font-bold text-neutral-100 mb-4">
              Pokédex
            </h1>

            <h2 className="w-10/12 text-base text-neutral-200 my-4">
              Search for a Pokémon by name or using its National Pokédex number.
            </h2>

            <div className="w-full flex items-center justify-center gap-4 mb-4">
              <div className="w-10/12 h-11 border-2 border-neutral-600 bg-white rounded-md">
              </div>

              <div className="flex justify-center items-center bg-red-500 p-3 rounded-md shadow-button">
                <GoSearch
                  color="white"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <PokemonCard />
    </div>
  )
}

export default PokemonList
