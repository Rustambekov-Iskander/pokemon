import React, {FC} from 'react';
import cl from './PokemonCardComponent.module.scss';

import {IPokemon} from "../../types/pokemonTypes";

interface pokeProps {
    pokemon: IPokemon;
}

const PokemonCardComponent: FC<pokeProps> = ({pokemon}) => {
    return (
        <div className={cl.card}>
            <div className={cl.card__img}>
                <img
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={pokemon.name}
                />
            </div>
            <div>{pokemon.name}</div>
        </div>
    );
};

export default PokemonCardComponent;
