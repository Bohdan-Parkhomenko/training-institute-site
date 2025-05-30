import React, {useState} from 'react';
import './Header.css';

import CoursesPanel from '../CoursesPanel/CoursesPanel';
import LogoBlock from "./components/LogoBlock/LogoBlock";
import MainNav from "./components/MainNav/MainNav";
import HeaderActions from "./components/HeaderActions/HeaderActions";


const Header = () => {


    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menuName) => {
        setOpenMenu((prev) => (prev === menuName ? null : menuName));
    };

    return (
        <>
            <header className="header">
                <div className="header-left">
                    <LogoBlock/>
                    <MainNav openMenu={openMenu} toggleMenu={toggleMenu}/>
                </div>

                <HeaderActions/>
            </header>

            <div className="courses-wrapper">
                <CoursesPanel isActive={openMenu === 'courses'}/>

            </div>
        </>
    );
};

export default Header;
