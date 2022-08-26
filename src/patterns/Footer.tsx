import Link from "next/link"

function Footer() {
  
  return (
    <div className="flex flex-col items-center justify-center bg-neutral-800 lg:bg-white w-screen h-16 lg:fixed bottom-0 text-neutral-400 lg:text-neutral-400 gap-1 text-xs sm:text-sm font-roboto mt-6 lg:border-t ">
      <div className="w-10/12 lg:w-full flex flex-col items-center justify-center gap-1 lg:relative lg:pl-[20%] xl:pl-[280px]">
        <div className="">
          By
          <Link href={"https://github.com/gustavorfernandes"}>
            <a className="ml-1 underline text-neutral-200 lg:text-neutral-500" target={"_blank"}>
              {`Gustavo Fernandes `}
            </a>
          </Link>
          <span>
            {` using the `}
          </span>
          <Link href={"https://pokeapi.co/"}>
            <a className="underline text-neutral-200 lg:text-neutral-500" target={"_blank"}>PokeAPI.</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
