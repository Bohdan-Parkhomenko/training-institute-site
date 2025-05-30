import React from 'react';
import './Banner.css';
import bannerImg from '../../assets/banner-image.png';

const Banner = () => {
    return (
        <div className="banner">
            <section className="hero">
                <div className="hero-content">
                    <h1>
                        Курси становлення
                        ефективних <span className="highlight">лідерів</span>
                    </h1>
                    <p>
                        Інститут Лідерства, Управління та Коучингу допоможе тобі
                        стати ефективним лідером, який розвиває свою організацію
                        та зрощує наступне покоління лідерів
                    </p>
                    <div className="button-group">
                        <button className="btn blue">Актуальні</button>
                        <button className="btn yellow">Усі курси</button>
                    </div>

                </div>

                <div className="hero-image">
                    <img src={bannerImg} alt="Курси лідерства"/>
                </div>
            </section>
            <div className="dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    );
};

export default Banner;
