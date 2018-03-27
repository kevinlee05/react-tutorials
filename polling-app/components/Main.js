import React from 'react';
import Audience from './Audience';
import Speaker from './Speaker';
import Board from './Board';
import { BrowserRouter, Switch, Route } from "react-router-dom";

class Main extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props)

    }

    render(){
        return(
            <Switch>
                <Route exact path="/" render={(props)=> <Audience {...props} />} />
                <Route path="/speaker"  component={Speaker} />
                <Route path="/board"  component={Board} />
            </Switch>
        )
    }

}

export default Main;
