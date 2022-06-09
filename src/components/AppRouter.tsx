import React from 'react';
import {Route, Routes} from "react-router-dom";
import AllPokemon from "../pages/all-pokemon/AllPokemon";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<AllPokemon/>}/>
        </Routes>
    );
}

export default AppRouter;
