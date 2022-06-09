import React from 'react';
import cl from './Footer.module.scss';
import inst from '../img/icons/inst.svg';
import facebook from '../img/icons/facebook.svg';
import telegram from '../img/icons/telegram.svg';
import youtube from '../img/icons/youtube.svg';

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.footer__inner}>
                <div className={cl.footer__title}>Подпишитесь на нас!</div>
                <div className={cl.footer__social}>
                    <div className={cl.footer__socialItem}>
                        <img src={inst} alt={inst}/>
                    </div>
                    <div className={cl.footer__socialItem}>
                        <img src={facebook} alt={facebook}/>
                    </div>
                    <div className={cl.footer__socialItem}>
                        <img src={telegram} alt={telegram}/>
                    </div>
                    <div className={cl.footer__socialItem}>
                        <img src={youtube} alt={youtube}/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
