import React from 'react';
import cl from './Header.module.scss';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.header__nav}>
                <div className={cl.header__navItem}><Link to={'/'}>Все покемоны</Link></div>
                <div className={cl.header__navItem}><Link to={'#'}>Помощь</Link></div>
                <div className={cl.header__navItem}><Link to={'#'}>Контакты</Link></div>
            </div>
        </header>
    );
};

export default Header;
