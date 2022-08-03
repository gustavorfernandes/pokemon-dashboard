import { createContext } from 'react'
import axios from 'axios'

export const ContextDataAPI = createContext({})

export const DataAPIProvider = ({ children }: any) => {
  axios({
    method: "get",
    url: "https://pokeapi.co/api/v2/pokemon/bulbasaur/",
    responseType: "json",
  }).then(function (response) {
  console.log(response)
}).catch (function (error) {
  console.log(error)
})

return (
  <ContextDataAPI.Provider value={{ }}>
    {children}
  </ContextDataAPI.Provider>
)

}