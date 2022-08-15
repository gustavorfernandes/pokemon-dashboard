/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

function PokemonCard(props: any) {
  const initialPokemons = props.pokemons

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {initialPokemons &&

        initialPokemons.map((item: any, index: any) => {

          return (
            <div className="w-10/12 flex flex-col justify-center gap-2 font-exo select-none mb-4" key={index}>

              <div className="w-full flex items-center justify-between">
                <div className="flex flex-col justify-center">
                  <span className="self-start text-neutral-500 font-bold">
                    {item.entry_number < 10 && `n 00${item.entry_number}`}
                    {item.entry_number >= 10 && item.entry_number < 100 && `n 0${item.entry_number}`}
                    {item.entry_number >= 100 && `n ${item.entry_number}`}
                  </span>
                  <h2 className="capitalize text-3xl text-neutral-800 font-bold">
                    {item.pokemon_species.name}
                  </h2>
                </div>
              </div>

              <div className="w-full bg-neutral-100 p-8 rounded-lg flex items-center justify-center mb-2">
                <Link href={`${item.entry_number}`}>
                  <a>
                    <img
                      className="w-full"
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.entry_number}.png`}
                      alt={item.pokemon_species.name}
                    />
                  </a>
                </Link>
              </div>
            </div>
          )
        })}

      {/* <div className="flex flex-col gap-2 justify-center">
        <span className="py-1 px-3 w-28 text-center bg-green-400 rounded-xl">
          Grass
        </span>
        <span className="py-1 px-3 w-28 text-center bg-fuchsia-400 rounded-xl text-neutral-200">
          Poison
        </span>
      </div> */}

    </div>
  )
}

export default PokemonCard
