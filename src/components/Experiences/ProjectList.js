import React, {Component} from 'react';
import {portfolioData} from "../../data/portfolioData";
import Project from "./Project";


export default class ProjectList extends Component {
    state = {
        projects: portfolioData,
        radio: [
            {id: 1, value: "javascript"},
            {id: 2, value: "css"},
            {id: 3, value: "php"},
            {id: 4, value: "vue.js"},
        ],
        selectedRadio: 'javascript'
    };
    handleRadio = (event) => {
        let radio = event.target.value;
        this.setState({selectedRadio: radio})
    }

    render() {
        let {projects, radio, selectedRadio} = this.state;

        return (
            <div className="experiencesContent">
                <ul className="radioDisplay">
                    {
                        radio.map((radio) => {
                            return (
                                <li key={radio.id}>
                                    <input
                                        type="radio"
                                        name="radio"
                                        checked={radio.value === selectedRadio}
                                        value={radio.value}
                                        id={radio.value}
                                        onChange={this.handleRadio}
                                    />
                                    <label htmlFor={radio.value}>{radio.value}</label>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className="projects">
                    {
                        projects
                            .filter(item => item.languages.includes(selectedRadio))
                            .map(item => {
                            return(
                                <Project
                                    key = {item.id}
                                    item={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}


