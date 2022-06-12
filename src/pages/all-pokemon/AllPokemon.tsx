import React, {useEffect, useState} from 'react';
import Filter from "../../components/filter-menu/Filter";
import cl from './AllPokemon.module.scss';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Loader from "../../components/UI/loader/Loader";
import {fetchPokemons} from "../../store/reducers/ActionCreators";
import PokemonCardComponent from "../../components/pokemon-card/PokemonCardComponent";
import {Link} from "react-router-dom";

const AllPokemon = () => {
    const dispatch = useAppDispatch()
    const { pokemons, isLoading, error } = useAppSelector(state => state.pokemonReducer)

    useEffect(() => {
        dispatch(fetchPokemons())
    }, [])

    return (
        <div className={cl.main}>
            <Filter/>
            <div className={cl.main__inner}>
                <div className={cl.main__row}>
                    <div className={'bold-16'}>Сортировать по:</div>
                    <div className={cl.main__sortMenu}>
                        <div className={cl.main__sortMenuItem}>Популярности</div>
                        <div className={cl.main__sortMenuItem}>Рейтингу</div>
                        <div className={cl.main__sortMenuItem}>Уровню силы</div>
                    </div>
                </div>
                {
                    isLoading
                    ?<Loader/>
                    :<div className={cl.pokemonCardList}>
                         {pokemons.map((pokemon) => (
                             <Link key={pokemon.name} to={`pokemon/${pokemon.id}`}>
                                 <PokemonCardComponent pokemon={pokemon}/>
                             </Link>
                        ))}
                    </div>
                }

            </div>
        </div>
    );
};

export default AllPokemon;
