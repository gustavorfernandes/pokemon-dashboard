/* eslint-disable @next/next/no-img-element */
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export function Sidebar() {
  const { sideBar }: any = useContext(GlobalContext)

  return (
    <div className="hidden lg:flex flex-col items-center w-3/12 xl:w-[320px] h-screen bg-neutral-800 z-30">
      <div>
        <img
          className="w-28 xl:w-36 mt-4"
          src="/images/pokemon-logo.png"
          alt="Pokeball"
        />
      </div>
    </div>
  )
}

export default Sidebar
