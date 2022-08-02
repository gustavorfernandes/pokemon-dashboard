import Link from "next/link"

function PokemonList() {
  return (
    <div>
      <h1>Pokemon List</h1>
      <Link href={"/pokemon"}>
        <a>Bulbasaur</a>
      </Link>
    </div>
  )
}

export default PokemonList
