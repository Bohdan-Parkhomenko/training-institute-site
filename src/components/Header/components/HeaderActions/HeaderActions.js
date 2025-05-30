import React, {useState} from 'react';
import phoneIcon from '../../../../assets/phone.svg';
import instagramIcon from '../../../../assets/instagram.svg';
import facebookIcon from '../../../../assets/facebook.svg';
import youtubeIcon from '../../../../assets/youtube.svg';
import handsHelpingIcon from '../../../../assets/hands-helping.svg';
import userIcon from '../../../../assets/user.svg';
import menuIcon from "../../../../assets/menu-icon.svg";
import closeIcon from '../../../../assets/close-icon.svg';


const HeaderActions = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="header-right">
                <div className="header-phone">
                    <img src={phoneIcon} alt="Phone"/>
                    <span>+38 (099) 123-4567</span>
                </div>

                <div className="header-socials">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <img src={instagramIcon} alt="Instagram"/>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <img src={facebookIcon} alt="Facebook"/>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer">
                        <img src={youtubeIcon} alt="YouTube"/>
                    </a>
                </div>

                <div className="header-donate">
                    <img src={handsHelpingIcon} alt="Donate"/>
                </div>

                <button className="header-login">
                    <img src={userIcon} alt="User"/>
                    <span>Увійти</span>
                </button>

                <button className="nav-button menu-icon-left" onClick={toggleMenu}>
                    <img src={isMenuOpen ? closeIcon : menuIcon} alt="Menu" />
                </button>


                {isMenuOpen && (
                    <div className="mobile-footer">
                        <div className="mobile-footer-center">
                            <div className="header-phone">
                                <img src={phoneIcon} alt="Phone" />
                                <span>+38 (099) 123-4567</span>
                            </div>

                            <div className="header-socials">
                                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                    <img src={instagramIcon} alt="Instagram" />
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                    <img src={facebookIcon} alt="Facebook" />
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                                    <img src={youtubeIcon} alt="YouTube" />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default HeaderActions;
