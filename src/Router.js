import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

//Import of pages
import Home from './pages/Home'
import Navbar from "./pages/Navbar";



const Router = () => (
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>
)


export default Router
