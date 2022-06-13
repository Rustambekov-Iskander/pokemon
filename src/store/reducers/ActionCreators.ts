import {AppDispatch} from "../store";
import {pokeSlice} from "./PokeSlice";
import axios from "axios";
import {IPokemon, Pokemon} from "../../types/pokemonTypes";

export const fetchPokemons = (sort: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(pokeSlice.actions.pokemonsFetching());
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
        const allPokemons: IPokemon[] = [];

        const createPokemonObj = async (result: Pokemon[]) => {
            for (let i = 1; i <= result.length; ++i) {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
                allPokemons.push(res.data);
            }
        }
        await createPokemonObj(res.data.results);

        const pokemonSort = () => {

            allPokemons.sort((a: IPokemon, b: IPokemon): any => {
                if (sort === 'base_experience') {
                    if (a.base_experience < b.base_experience) {
                        return 1;
                    }
                    if (a.base_experience > b.base_experience) {
                        return -1;
                    }
                }else if ( sort === 'weight' ){
                    if (a.weight < b.weight) {
                        return 1;
                    }
                    if (a.weight > b.weight) {
                        return -1;
                    }
                }else if ( sort === 'height' ){
                    if (a.height > b.height) {
                        return 1;
                    }
                    if (a.height < b.height) {
                        return -1;
                    }
                }

                return 0;
            })

        }
        await pokemonSort();
        dispatch(pokeSlice.actions.pokemonsFetchingSuccess(allPokemons));

    } catch (e) {
        dispatch(pokeSlice.actions.pokemonsFetchingError('Произошла ошибка' + e))
    }
}



