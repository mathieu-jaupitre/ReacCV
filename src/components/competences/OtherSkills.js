import React from 'react';

const otherSkills = () => {
    return (
        <div className="otherSkills">
            <h3>Autres compétences</h3>
            <div className="list">
                <ul>
                    <li>
                        <i className="fas fa-check-square"></i>
                        Maquetter une application en prennant en compte les contraintes et exigeances requises.
                    </li>
                    <li>
                        <i className="fas fa-check-square"></i>
                        Développement de la partie front-end d'une application, intégration, responsive,
                        mise en oeuvre de fonctionnalitées technique et respet des bonnes pratiques de sécurité.
                    </li>
                    <li>
                        <i className="fas fa-check-square"></i>
                        Développement de la partie back-end d'une application web, architecture en couche, sécurité, debug.
                    </li>
                    <li>
                        <i className="fas fa-check-square"></i>
                        Création et gestion d'une base de donnée relationnel.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default otherSkills;
