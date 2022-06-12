import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchPokemons} from "./ActionCreators";
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
    reducers: {},
    extraReducers: {
        [fetchPokemons.pending.type]: (state) => {
            state.isLoading = true;
        },

        [fetchPokemons.fulfilled.type]: (state, action: PayloadAction<IPokemon[]>) => {
            state.isLoading = false;
            state.error = '';
            state.pokemons = action.payload;
        },

        [fetchPokemons.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default pokeSlice.reducer;