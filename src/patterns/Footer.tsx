import Link from "next/link"

function Footer() {
  return (
    <div className="flex items-center justify-center bg-neutral-800 w-screen h-20 bottom-0 text-neutral-400 gap-1 text-sm font-roboto mt-12">
      <span>
        By
        <Link href={"https://github.com/gustavorfernandes"}>
          <a className="ml-1 underline text-neutral-200" target={"_blank"}>
            Gustavo Fernandes
          </a>
        </Link>
        , using the
      </span>
      <Link href={"https://pokeapi.co/"}>
        <a className="underline text-neutral-200" target={"_blank"}>PokeAPI.</a>
      </Link>
    </div>
  )
}

export default Footer
