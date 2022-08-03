import Link from "next/link"

function PokemonAbout() {
  return (
    <div className="w-screen flex flex-col items-center justify-center">













      <div className="w-10/12 flex items-center justify-center mt-12">
        <button className="w-full bg-green-600 hover:bg-green-700 py-2 rounded transition-all shadow-button text-white font-exo text-lg">
          <Link href={"/"}>
            <a>
              Explore more Pokémon
            </a>
          </Link>
        </button>
      </div>

    </div>
  )
}

export default PokemonAbout
