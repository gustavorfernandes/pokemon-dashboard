import Link from "next/link"

function Footer() {
  return (
    <div className="flex items-center justify-center bg-neutral-800 w-screen h-20 absolute bottom-0 text-neutral-400 gap-1">
      <span className="font-sans text-sm">
        By Gustavo Fernandes, using the   
      </span>
      <Link href={"https://pokeapi.co/"}>
        <a className="underline text-sm text-neutral-200" target={"_blank"}>PokeAPI.</a>
      </Link>
    </div>
  )
}

export default Footer
