import Link from "next/link"

function PokemonCard() {
  return (
    <div>
      <Link href={"/pokemon"}>
        <a>Bulbasaur</a>
      </Link>
    </div>
  )
}

export default PokemonCard
