/* eslint-disable @next/next/no-img-element */
import { Squash as Hamburger } from "hamburger-react"
import { useState } from "react"

function Header() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="w-screen flex flex-col items-center justify-center pt-4">
      <div className="w-10/12 flex items-center justify-between">
        <img
          className="w-24 justify-self-center"
          src="/images/pokemon-logo.png"
          alt="Pokémon Logo"
        />

        <div className="-mr-3">
          <Hamburger
            rounded
            toggled={isOpen}
            toggle={setOpen}
            size={25}
            duration={0.2}
            color="#262626"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
