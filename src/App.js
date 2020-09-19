import React from 'react';
import AppContainer from "./containers/appContainer";
import {FooterContainer} from "./containers/footerContainer";
import {FaqsContainer} from "./containers/faqsContainer";
import HeaderContainer from "./containers/headerContainer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <HeaderContainer/>
                    <AppContainer />
                    <FooterContainer/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
