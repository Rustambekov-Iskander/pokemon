import React, {FC} from 'react';
import cl from './MyRadio.module.scss';
import {InputsPropsType} from "../../../types/inputTypes";


const MyRadio: FC<InputsPropsType> = ({inputs, ...props}) => {
    return (
        <>
            {inputs.map(radio => (
                <label key={radio.value} className={cl.radio}>
                    <input value={radio.value} name={'radio'} className={cl.radio__input} type="radio"/>
                    <span className={cl.radio__circle}>
                </span>
                    {radio.name}
                </label>
            ))}
        </>
    );
};

export default MyRadio;
