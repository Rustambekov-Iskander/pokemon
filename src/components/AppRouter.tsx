import React from 'react';
import {Route, Routes} from "react-router-dom";
import AllPokemon from "../pages/all-pokemon/AllPokemon";
import PokemonPage from "../pages/pokemon-page/PokemonPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<AllPokemon/>}/>
            <Route path={'pokemon/:id'} element={<PokemonPage/>}/>
        </Routes>
    );
}

export default AppRouter;
