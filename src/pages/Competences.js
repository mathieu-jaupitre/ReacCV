import React from 'react';
import Navigation from "../components/Navigation";
import Languages from "../components/competences/Languages";
import OtherSkills from "../components/competences/OtherSkills";
import Hobbies from "../components/competences/Hobbies";
import Formations from "../components/competences/Formations";




const Competences = () => {
    return (
        <div className="competences">
            <Navigation/>
            <div className="competencesContent">

                <Languages />
                <Formations />
                <Hobbies />
                <OtherSkills />
            </div>
        </div>
    );
};

export default Competences;