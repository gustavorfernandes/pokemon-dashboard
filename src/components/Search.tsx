/* eslint-disable react-hooks/exhaustive-deps */
import { GoSearch } from "@react-icons/all-files/go/GoSearch"
import React, { useState, useContext, useEffect } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function Search(props: any) {
  const initialList = props.pokemonsObject

  const { listByType, currentPokemonList, setCurrentPokemonList, setItensPerPage, setInitial, search, setSearch }: any = useContext(GlobalContext)  

  function submitSearch(event: React.FormEvent) {
    event.preventDefault()
    return listByType.filter(function (item: any) {
      return item.name.includes(search.toLowerCase()) || item.number.toString().includes(search.toLowerCase())
    })
  }

  useEffect(() => {
    setCurrentPokemonList(initialList)
  }, [])

  return (
    <form onSubmit={(event) => {
      const currentList = submitSearch(event)
      setCurrentPokemonList(currentList)
      setInitial(false)
    }}>
      <fieldset>
        <div className="w-full flex items-center justify-start gap-2 lg:gap-0 mb-4 lg:mb-0">
          <input
            className="w-10/12 md:max-w-xs lg:max-w-[15rem] xl:max-w-[20rem] lg:w-96 h-11 lg:h-10 md:h-14 border-2 font-roboto font-light border-neutral-600 lg:border-neutral-100 bg-white lg:bg-neutral-100 rounded-md lg:rounded-none lg:rounded-tl-md lg:rounded-bl-md pl-4 focus:border-yellow-500 lg:focus:border-none focus:outline-0"
            value={search}
            name="search"
            type="text"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Name or number"
          />
          <label
            htmlFor="search"
          />

          <button
            className="flex justify-center items-center bg-red-500 hover:bg-red-600 transition-all p-3 md:p-0 md:w-14 lg:w-12 md:h-14 lg:h-10 rounded-md lg:rounded-none lg:rounded-tr-md lg:rounded-br-md shadow-button"
            type="submit"
          >
            <GoSearch
              color="white"
              size={20}
            />
          </button>
        </div>
      </fieldset>
    </form>
  )
}

export default Search
