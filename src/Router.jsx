import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const AppRouter = () => (
    <Switch>
        <Route path="/placeholder">
            <Placeholder />
        </Route>
        <Route path="/feed">
            <Feed />
        </Route>
        <Route path="/">
            <Feed />
        </Route>
    </Switch>
);

function Feed() {
    return <h2>Feed</h2>;
}

function Home() {
    return <h2>Home</h2>;
}

function Placeholder() {
    return <h2>Placeholder</h2>;
}

export default AppRouter;