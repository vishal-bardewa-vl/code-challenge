import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pokemons: []
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    getPokemon: (state, action) => {
      state.pokemons = [...action.payload]
    },
    deletePokemon: (state: any, action : any) => {
        state.pokemons = state.pokemons.filter((s: any) => action.payload !== s.name)
    }
  },
})

export const { getPokemon, deletePokemon } = pokemonSlice.actions

export default pokemonSlice.reducer
