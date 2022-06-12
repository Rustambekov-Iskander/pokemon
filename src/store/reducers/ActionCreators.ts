import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {IPokemon, Pokemon} from "../../types/pokemonTypes";


export const fetchPokemons = createAsyncThunk(
    'pokemon/fetchAll',
    async (_, thunkApi) => {
        try {
            const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
            const allPokemons: IPokemon[] = [];
            // const [allPokemons, setAllPokemons]: any = useState([]);

            const createPokemonObj = async (result: Pokemon[]) => {
                // result.forEach( async (pokemon: any) => {
                //     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                //     setAllPokemons( (current: any) => [...current, response] );
                // })
                for (let i = 1; i <= result.length; ++i) {
                    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
                    allPokemons.push(res.data);
                }
            }
            await createPokemonObj(res.data.results);
            return allPokemons;
        }
        catch (e) {
            return thunkApi.rejectWithValue('Не удалось загрузить список покемонов...')
        }

    }
)

