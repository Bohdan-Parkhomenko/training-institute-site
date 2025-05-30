import React from 'react';
import logo from '../../../../assets/logo.png';

const LogoBlock = () => {
    return (
        <div className="logo">
            <img src={logo} alt="Logo" className="header-logo"/>
            <span className="header-brand">
                <p>ІНСТИТУТ ЛІДЕРСТВА,<br/>УПРАВЛІННЯ І КОУЧИНГУ</p>
            </span>
        </div>
    );
};

export default LogoBlock;