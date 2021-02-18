// Package import
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { useState } from "react";
// import Cookies from "js-cookie";

// fontAwesome import
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// CSS import
import "./App.scss";

// Containers import
import Comics from "./containers/comics";
import Characters from "./containers/characters";

//Component import
import Header from "./conponents/Header";

// lib Awesome
library.add(faSearch);

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route path="/comics">
                        <Comics />
                    </Route>
                    <Route path="/">
                        <Characters />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
