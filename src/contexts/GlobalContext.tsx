import { createContext } from 'react'

export const GlobalContext = createContext({})

export const ContextProvider = ({ children }: any) => { 
  return (
    <GlobalContext.Provider value={{ }}>
      {children}
    </GlobalContext.Provider>
  )
}