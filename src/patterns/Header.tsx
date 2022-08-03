/* eslint-disable @next/next/no-img-element */
import { Squash as Hamburger } from 'hamburger-react'
import { SlidersHorizontal } from 'phosphor-react'
import { useState } from 'react'

function Header() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="w-screen flex flex-col items-center justify-center pt-4">
      <div className="w-10/12 flex items-center justify-between">
        <div>
          <Hamburger
            rounded
            toggled={isOpen}
            toggle={setOpen}
            size={25}
            duration={0.2}
          />
        </div>

        <img
          className="w-24 justify-self-center"
          src="/images/pokemon-logo.png"
          alt="Pokémon Logo"
        />

        <div className='bg-neutral-200 rounded-lg shadow-button hover:scale-110 transition-all'>
          <button className='rounded-md p-2 flex justify-center items-center'>
            <SlidersHorizontal
              size={24}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
