import React, {Component} from 'react';

import ProgressBar from "./ProgressBar";

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp:1.8},
            {id: 1, value: "Css", xp:1.9},
            {id: 1, value: "Php", xp:0.7},
            {id: 1, value: "Html", xp:1.2},
        ],
        frameworks: [
            {id: 1, value: "React", xp:1.5},
            {id: 1, value: "Vue", xp:1.8},
            {id: 1, value: "Symfony", xp:1.2},
            {id: 1, value: "Bootstrap", xp:0.8},
        ]
    }
    render() {
        let {languages, frameworks} = this.state
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    tittle="languages"
                />
                <ProgressBar
                    languages={frameworks}
                    className="frameworksDisplay"
                    tittle="framework"
                />
            </div>
        );
    }
}

Languages.propTypes = {};

export default Languages;

