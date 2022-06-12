import React, {FC} from 'react';
import cl from './PokemonCardComponent.module.scss';

import {IPokemon} from "../../types/pokemonTypes";
import defaultImg from '../img/default-pokemon.png';

interface pokeProps {
    pokemon: IPokemon;
}

const PokemonCardComponent:FC<pokeProps> = ({pokemon}) => {
    return (
        <div className={cl.card}>
            <div className={cl.card__img}>
                <img src={pokemon.sprites.front_default ?pokemon.sprites.front_default :defaultImg} alt={pokemon.name}/>
            </div>
            <div>{pokemon.name}</div>
        </div>
    );
};

export default PokemonCardComponent;
