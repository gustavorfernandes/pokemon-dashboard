import { GoSearch } from "@react-icons/all-files/go/GoSearch"
import React, { useState } from "react"

function Search() {
  const [search, setSearch] = useState("")

  function submitSearch(event: React.FormEvent) {
    event.preventDefault()
    setSearch("")
  }

  return (
    <form onSubmit={submitSearch}>
      <fieldset>
        <div className="w-full flex items-center justify-center gap-2 mb-4">
          <input
            className="w-10/12 h-11 border-2 font-roboto font-light border-neutral-600 bg-white rounded-md pl-4 focus:border-yellow-500 focus:outline-0"
            value={search}
            name="search"
            type="text"
            onChange={event => setSearch(event.target.value)}
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
