import React, {useState} from 'react';
import cl from './Filter.module.scss';
import AccordionComponent from "../UI/accordion/AccordionComponent";
import CheckBox from "../UI/checkbox/CheckBox";

interface typesType {
    name: string;
    status: boolean;
}

const Filter = () => {

    const [types, setTypes] = useState<typesType[]>([
        {name: 'Физические', status: false},
        {name: 'Специальные', status: false}
    ]);


    return (
        <div className={cl.filter}>
            <div className={cl.filter__circle}>
            </div>
            <div className={cl.filter__inner}>
                <AccordionComponent title={'Поколение'}>
                    <li>Специальные</li>
                </AccordionComponent>

                <AccordionComponent title={'Тип'}>
                    {types.map(type =>
                        <CheckBox
                            label={type.name}
                            key={type.name}
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
