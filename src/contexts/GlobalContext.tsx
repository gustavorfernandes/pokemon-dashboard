import { createContext, useState } from 'react'

export const GlobalContext = createContext({})



export const ContextProvider = ({ children }: any) => {   
  const options = [
    { id: 1, name: 'Lowest Number (First)', unavailable: false },
    { id: 2, name: 'Highest Number (First)', unavailable: false },
    { id: 3, name: 'A-Z', unavailable: false },
    { id: 4, name: 'Z-A', unavailable: false }
  ]
  const [sideBar, setSideBar] = useState(false)
  const [ pokemonList, setPokemonList ] = useState([])
  const [ currentPokemonList, setCurrentPokemonList ] = useState([])
  const [itensPerPage, setItensPerPage] = useState(12)
  const [isInitial, setInitial] = useState(true)
  const [selectList, setSelectList] = useState(options[0])  
  const [filter, setFilter] = useState("")
  const [order, setOrder] = useState(1)
  const [filterOrder, setFilterOrder] = useState("number")
    
  return (
    <GlobalContext.Provider value={{ sideBar, setSideBar, pokemonList, setPokemonList, currentPokemonList, setCurrentPokemonList, itensPerPage, setItensPerPage, isInitial, setInitial, selectList, setSelectList, options, filter, setFilter, order, setOrder, filterOrder, setFilterOrder }}>
      {children}
    </GlobalContext.Provider>
  )
}