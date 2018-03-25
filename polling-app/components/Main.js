import React from 'react';
import Audience from './Audience';
import Speaker from './Speaker';
import Board from './Board';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class Main extends React.Component{

    render(){
        return(
            <Switch>
                <Route exact path="/" name="audience" component={Audience} />
                <Route path="/speaker" name="speaker" component={Speaker} />
                <Route path="/board" name="board" component={Board} />
            </Switch>
        )
    }

}

export default Main;
