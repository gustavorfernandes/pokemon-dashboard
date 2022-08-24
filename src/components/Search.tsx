/* eslint-disable react-hooks/exhaustive-deps */
import { GoSearch } from "@react-icons/all-files/go/GoSearch"
import { useState, useContext, useEffect } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function Search(props: any) {
  const initialList = props.pokemons

  const { pokemonList, setCurrentPokemonList, setItensPerPage }: any = useContext(GlobalContext)
  const [search, setSearch] = useState("")

  function submitSearch(event: React.FormEvent) {
    event.preventDefault()
    return pokemonList.filter(function (item: any) {      
      return item.pokemon_species.name.includes(search.toLowerCase()) || item.entry_number.toString().includes(search.toLowerCase())
    })    
  }

  useEffect(() => {
    setCurrentPokemonList(initialList)
  }, [])

  return (
    <form onSubmit={(event) => {
      const currentList = submitSearch(event)
      setCurrentPokemonList(currentList)
      setItensPerPage(12)
    }}>
      <fieldset>
        <div className="w-full flex items-center justify-center gap-2 mb-4">
          <input
            className="w-10/12 h-11 border-2 font-roboto font-light border-neutral-600 bg-white rounded-md pl-4 focus:border-yellow-500 focus:outline-0"
            value={search}
            name="search"
            type="text"
            onChange={(event) => {
              setSearch(event.target.value)
              if (event.target.value === "") {
                const currentList = submitSearch(event)
                setCurrentPokemonList(currentList)
                setItensPerPage(12)
              }
            }}
            placeholder="Name or number"
          />
          <label
            htmlFor="search"
          />

          <button
            className="flex justify-center items-center bg-red-500 hover:bg-red-600 transition-all p-3 rounded-md shadow-button"
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
