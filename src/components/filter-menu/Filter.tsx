import React, {useState} from 'react';
import cl from './Filter.module.scss';
import AccordionComponent from "../UI/accordion/AccordionComponent";
import CheckBox from "../UI/checkbox/CheckBox";
import MyRadio from "../UI/radio/MyRadio";
import {inputType} from "../../types/inputTypes";


const Filter = () => {

    const [types, setTypes] = useState<inputType[]>([
        {name: 'Физические', status: false, value: 'physicals'},
        {name: 'Специальные', status: false, value: 'specials'}
    ]);

    const [generation, setGeneration] = useState<inputType[]>([
        {name: '1-oe', status: false, value: 1},
        {name: '2-oe', status: false, value: 2},
        {name: '3-oe', status: false, value: 3},
        {name: '4-oe', status: false, value: 4},
        {name: '5-oe', status: false, value: 5},
        {name: '6-oe', status: false, value: 6},
        {name: '7-oe', status: false, value: 7},
        {name: '8-oe', status: false, value: 8},
        {name: '9-oe и новее', status: false, value: 9},
    ]);

    const checkBoxHandler = (e: React.ChangeEvent<HTMLInputElement>, type: inputType) => {
        type.status = e.target.checked;
    }

    return (
        <div className={cl.filter}>
            <div className={cl.filter__circle}>
            </div>
            <div className={cl.filter__inner}>
                <AccordionComponent title={'Поколение'}>
                    <MyRadio inputs={generation}/>
                </AccordionComponent>

                <AccordionComponent title={'Тип'}>
                    {types.map(type =>
                        <CheckBox
                            input={type}
                            key={type.name}
                            onChange={(e) => checkBoxHandler(e, type)}
                        />)}
                </AccordionComponent>

                <AccordionComponent title={'Физические'}>
                    <li>1</li>
                </AccordionComponent>

                <AccordionComponent title={'Специальные'}>
                    <li>1</li>
                </AccordionComponent>
            </div>
        </div>
    );
};

export default Filter;
