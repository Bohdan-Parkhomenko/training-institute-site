import React, {useState} from 'react';
import './CoursesPanel.css';

import coursesData from '../../data/coursesData';
import arrowRight from '../../assets/arrow-right.png';
import arrowRightHover from '../../assets/arrow-right-2.png';
import {ReactComponent as CheckmarkIcon} from '../../assets/checkmark-circle.svg';


const CoursesPanel = ({ isActive }) => {
    const [hoveredCourse, setHoveredCourse] = useState(null);

    return (
        <section className={`courses-panel  courses-wrapper ${isActive ? 'active' : ''}`}>
        {coursesData.map(({id, title, color, courses}) => (
                <article className="course-category" key={id}>
                    <header className="course-category-header" style={{color}}>
                        <CheckmarkIcon className="checkmark-icon"/>
                        <h3>{title}</h3>
                    </header>


                    <ul className="course-list">
                        {courses.map(({name, status}) => (
                            <li
                                className="course-item"
                                key={name}
                                onMouseEnter={() => setHoveredCourse(name)}
                                onMouseLeave={() => setHoveredCourse(null)}
                            >
                                <div className="course-info">
                                    <img
                                        src={hoveredCourse === name ? arrowRightHover : arrowRight}
                                        alt="arrow"
                                        className="course-arrow"
                                    />
                                    <span className="course-name">{name}</span>
                                </div>
                                <button className="course-status">{status}</button>
                            </li>
                        ))}
                    </ul>
                </article>
            ))}
        </section>
    );
};

export default CoursesPanel;
