import { createContext, useState } from 'react'

export const GlobalContext = createContext({})

export const ContextProvider = ({ children }: any) => { 
  const [ pokemonList, setPokemonList ] = useState([])
    
  return (
    <GlobalContext.Provider value={{ pokemonList, setPokemonList }}>
      {children}
    </GlobalContext.Provider>
  )
}