import React, {ComponentPropsWithoutRef, FC, MouseEventHandler} from 'react';
import cl from './CheckBox.module.scss';
import {InputPropsType} from "../../../types/inputTypes";


const CheckBox:FC<InputPropsType> = ({input, ...props}) => {
    return (
        <label className={cl.check}>
            <input className={cl.check__input} type="checkbox" {...props}/>
            <span className={cl.check__box}>
            </span>
            {input.name}
        </label>
    );
};

export default CheckBox;
