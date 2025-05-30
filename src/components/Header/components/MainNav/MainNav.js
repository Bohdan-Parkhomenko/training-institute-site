import React from 'react';
import upArrow from '../../../../assets/upArrow.svg';
import downArrow from '../../../../assets/downArrow.svg';
import menuIcon from '../../../../assets/menu-icon.svg';

const MainNav = ({ openMenu, toggleMenu }) => {
    const navItems = [
        { id: 'courses', label: 'Курси' },
        { id: 'trainings', label: 'Тренінги' }
    ];

    const renderNavButton = ({ id, label }) => {
        const isOpen = openMenu === id;
        return (
            <button
                key={id}
                onClick={() => toggleMenu(id)}
                className={`nav-button ${isOpen ? 'nav-button--highlighted' : ''}`}
                aria-expanded={isOpen}
                aria-controls={`${id}-panel`}
            >
                {label}
                <img
                    src={isOpen ? upArrow : downArrow}
                    alt={isOpen ? 'Закрити меню' : 'Відкрити меню'}
                    className="dropdown-icon"
                />
            </button>
        );
    };

    return (
        <nav className="main-nav">
            {navItems.map(renderNavButton)}

            <button className="nav-button">Аналітичний центр</button>

            <button className="nav-button menu-icon" aria-label="Відкрити мобільне меню">
                <img src={menuIcon} alt="Меню" />
            </button>
        </nav>
    );
};

export default MainNav;
