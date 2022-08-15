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
                    {index + 1 < 10 && `n 00${index + 1}`}
                    {index + 1 >= 10 && index + 1 < 100 && `n 0${index + 1}`}
                    {index + 1 >= 100 && `n ${index + 1}`}
                  </span>
                  <h2 className="capitalize text-3xl text-neutral-800 font-bold">
                    {item.name}
                  </h2>
                </div>
              </div>

              <div className="w-full bg-neutral-100 p-8 rounded-lg flex items-center justify-center mb-2">
                <Link href={`${index + 1}`}>
                  <a>
                    <img
                      className="w-full"
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
                      alt={item.name}
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
