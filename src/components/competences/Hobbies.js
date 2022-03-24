import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Course à pied, sport co</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-chess"></i>
                    <span>Jeux de stratégie</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-paint-brush"></i>
                    <span>Illustration, UI UX design</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-book"></i>
                    <span>BD, Manga</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;
