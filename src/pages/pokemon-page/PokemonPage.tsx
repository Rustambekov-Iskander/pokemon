import React, {useEffect, useState} from 'react';
import cl from './PokemonPage.module.scss';
import {Link, useParams} from "react-router-dom";
import {IPokemon} from "../../types/pokemonTypes";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PokemonCardComponent from "../../components/pokemon-card/PokemonCardComponent";
import axios from "axios";

const PokemonPage = () => {
    const [pokemon, setPokemon] = useState<IPokemon>();
    const params = useParams();

    useEffect( () => {
        ( async () => {
            const resp = await axios.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
            setPokemon(resp.data);
        })()
    }, [])

    const paragraphText =  `
         ${pokemon?.name} — маленький четвероногий покемон голубовато-зелёного цвета с
         темно-зелёными пятнами на теле. У него красные глаза, широкий рот и слегка заострённые
         уши. Когда его рот открыт, на его верхней челюсти видна пара заострённых зубов.
         У него толстые лапы, заканчивающиеся тремя острыми когтями. На спине у Бульбазавра
         находится зелёная луковица, которая, согласно записи в Покедексе, была посажена
    `;

    return (
        <div className={cl.main}>
            <div className='container'>
                <div className={cl.main__inner}>
                    <div className={cl.main__row}>
                        <div className={cl.main__back}>
                            <Link to={'/'}>
                                <ArrowBackIcon color="action"/> Вернуться в каталог
                            </Link>
                        </div>
                        <div className={cl.main__inf}>
                            <p>
                                <span className={'bold-16'}>{pokemon?.name} </span>
                                (яп. フシギダネ Фусигиданэ, англ. {pokemon?.name}) — покемон двойного травяного
                                ядовитого типа, представленный в первом поколении.
                                Эволюционирует в Ивизавра на 16 уровне, который затем эволюционирует в Венузавра
                                на 32 уровне. Наряду с Чармандером и Сквиртлом, это один из стартовых покемонов
                                региона Канто.
                            </p>
                        </div>
                        <div className={cl.main__table}>
                            <div className={cl.main__tableTitle}>Содержание</div>
                            <ol>
                                <li>Внешность</li>
                                <li>Характер</li>
                                <li>Способности</li>
                                <li>Обитание</li>
                                <li>В аниме</li>
                                <li>Эволюция</li>
                            </ol>
                        </div>

                        <div className={cl.main__paragraph}>
                            <h1>Внешность</h1>
                            <p>{paragraphText}</p>
                        </div>

                        <div className={cl.main__paragraph}>
                            <h1>Характер</h1>
                            <p>{paragraphText}</p>
                        </div>

                        <div className={cl.main__paragraph}>
                            <h1>Способности</h1>
                            <p>{paragraphText}</p>
                        </div>
                    </div>

                    <div className={cl.main__pokemonCard}>
                    {
                        pokemon ? <PokemonCardComponent pokemon={pokemon}/> : <></>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonPage;
