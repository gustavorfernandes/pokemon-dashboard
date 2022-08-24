import { createContext, useState } from 'react'

export const GlobalContext = createContext({})

export const ContextProvider = ({ children }: any) => { 
  const [ pokemonList, setPokemonList ] = useState([])
  const [ currentPokemonList, setCurrentPokemonList ] = useState([])
  const [itensPerPage, setItensPerPage] = useState(12)
  const [isInitial, setInitial] = useState(true)
    
  return (
    <GlobalContext.Provider value={{ pokemonList, setPokemonList, currentPokemonList, setCurrentPokemonList, itensPerPage, setItensPerPage, isInitial, setInitial }}>
      {children}
    </GlobalContext.Provider>
  )
}