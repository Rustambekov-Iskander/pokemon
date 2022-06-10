import React from 'react';
import Filter from "../../components/filter-menu/Filter";
import cl from './AllPokemon.module.scss';

const AllPokemon = () => {
    return (
        <div className={cl.main}>
            <Filter/>
            Hello world
        </div>
    );
};

export default AllPokemon;
