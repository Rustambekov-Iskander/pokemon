import {IPokemon, Pokemon} from "../types/pokemonTypes";
import axios from "axios";

export const createPokemonObj = async (result: Pokemon[], allPokemons: IPokemon[]) => {
      for ( let i = 0; i < result.length; i++ ) {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${result[i].name}`);
        allPokemons.push(res.data);
      }
};


export const pokemonSort = (allPokemons: IPokemon[], sort: string) => {
    allPokemons.sort((a: IPokemon, b: IPokemon): any => {
        // todo DRY
        if (sort === 'base_experience') {
            if (a.base_experience < b.base_experience) {
                return 1;
            }
            if (a.base_experience > b.base_experience) {
                return -1;
            }
        } else if (sort === 'weight') {
            if (a.weight < b.weight) {
                return 1;
            }
            if (a.weight > b.weight) {
                return -1;
            }
        } else if (sort === 'height') {
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