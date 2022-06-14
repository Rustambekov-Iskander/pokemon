import {AppDispatch} from "../store";
import {pokeSlice} from "./PokeSlice";
import axios from "axios";
import {IPokemon, Pokemon} from "../../types/pokemonTypes";
import {createPokemonObj, pokemonSort} from "../../services/services";
import {useState} from "react";

export const fetchPokemons = (sort: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(pokeSlice.actions.pokemonsFetching());

        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
        const allPokemons: IPokemon[] = [];
        await createPokemonObj(res.data.results, allPokemons);
        pokemonSort(allPokemons, sort);

        dispatch(pokeSlice.actions.pokemonsFetchingSuccess(allPokemons));

    } catch (e) {
        dispatch(pokeSlice.actions.pokemonsFetchingError('Произошла ошибка ' + e))
    }
}



