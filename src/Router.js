import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

//Import of pages
import Home from './pages/Home'



const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/home" component={Home} />
        </Switch>
    </BrowserRouter>
)


export default Router
