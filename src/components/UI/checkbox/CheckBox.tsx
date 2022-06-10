import React, {FC, MouseEventHandler} from 'react';
import cl from './CheckBox.module.scss';

interface CheckBoxPropsType {
    label: string;
}

const CheckBox:FC<CheckBoxPropsType> = ({label}) => {
    return (
        <label className={cl.check}>
            <input className={cl.check__input} type="checkbox"/>
            <span className={cl.check__box}>
            </span>
            {label}
        </label>
    );
};

export default CheckBox;
