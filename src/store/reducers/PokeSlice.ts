import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPokemon} from "../../types/pokemonTypes";

interface PokeState {
    pokemons: IPokemon[];
    isLoading: boolean;
    error: string
}

const initialState: PokeState = {
    pokemons: [],
    isLoading: false,
    error: ''
}

export const pokeSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        pokemonsFetching(state) {
            state.isLoading = true;
        },
        pokemonsFetchingSuccess(state, action: PayloadAction<IPokemon[]>) {
            state.isLoading = false;
            state.error = '';
            state.pokemons = action.payload;
        },
        pokemonsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export default pokeSlice.reducer;