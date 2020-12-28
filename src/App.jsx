import React from 'react';
import { BrowserRouter as ReactRouter, Route, Switch } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppContainer from "./components/Container";
import PhraseListPage from './pages/PhraseList';

const App = () => (
    <div style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left : 0,
        overflow: 'none',
    }}>
        <ReactRouter history={{}}>
            <CssBaseline />
            <AppContainer>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <PhraseListPage />
                    </Route>
                </Switch>
            </AppContainer>
        </ReactRouter>
    </div>
);

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default App;