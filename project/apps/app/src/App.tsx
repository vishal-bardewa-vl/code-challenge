import { useEffect, useState } from 'react'
import { List } from 'ui'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemon } from './redux/pokemonSlice'

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {
  const pokemons = useSelector((state: any) => state.pokemon.pokemons)
  const dispatch = useDispatch()
  
  useEffect(() => {
    fetch(api).then(res => res.json()).then((res) => {
      // setState(res.results)})
      dispatch(getPokemon(res.results))})
  }, [])
  
  return (
  <>
    <h1>Pokemon list:</h1>
    <List list={pokemons} />
  </>
  )
}

export default App
