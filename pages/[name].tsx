import Footer from '../src/patterns/Footer'
import PokemonAbout from '../src/patterns/PokemonAbout'
import { useRouter } from 'next/router'

const Pokemon = () => {
  const router = useRouter()
  const { name } = router.query
  
  return (
    <>
      <PokemonAbout />

      <Footer />
    </>
  )
}

export default Pokemon
