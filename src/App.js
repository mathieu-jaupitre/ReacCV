
// navigation du site

import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Competences from "./pages/Competences";
import Experiences from "./pages/Experiences";


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" element={<Home />}><Home/></Route>
                <Route exact path="/Contact" element={<Contact />}><Contact/></Route>
                <Route exact path="/Competences" element={<Competences />}><Competences/></Route>
                <Route exact path="/Experiences" element={<Experiences/>}><Experiences/></Route>
                <Route element={<NotFound />}><NotFound/></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;

