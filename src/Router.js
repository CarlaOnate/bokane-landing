import React from 'react'
import {
        Switch,
        Route,
} from "react-router-dom";

const Home = () => <p>Hii!</p>


const Router = () => (
    <>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </>
)


export default Router
