import { useEffect, useState } from 'react'
import { List } from 'ui'

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {
  const [state, setState] = useState()
  useEffect(() => {
    fetch(api).then(res => res.json()).then((res) => {
      setState(res.results)})
  }, [])
  
  return (
  <>
    <h1>Pokemon list:</h1>
    <List list={state} />
  </>
  )
}

export default App
