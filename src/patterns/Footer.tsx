import Link from "next/link"

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-neutral-800 w-screen h-16 bottom-0 text-neutral-400 gap-1 text-xs sm:text-sm font-roboto mt-6">
      <div className="w-10/12 flex flex-col items-center justify-center gap-1">
        <div>
          By
          <Link href={"https://github.com/gustavorfernandes"}>
            <a className="ml-1 underline text-neutral-200" target={"_blank"}>
              {`Gustavo Fernandes `}
            </a>
          </Link>
          <span>
            {` using the `}
          </span>
          <Link href={"https://pokeapi.co/"}>
            <a className="underline text-neutral-200" target={"_blank"}>PokeAPI.</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
