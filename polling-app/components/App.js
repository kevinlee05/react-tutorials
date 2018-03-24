import React, {Component} from 'react';
import io from 'socket.io-client';
import Header from './parts/Header';

class App extends Component {

    constructor(props) {
        super(props);
        this.connect = this.connect.bind(this); // functions need to be bound to this when extending Component
    }

    componentWillMount(){
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect);
    }

    connect(){
        alert("Connected: " + this.socket.id);
    }

    render(){ //ES6 shorthand for render = function()
        return (
            <div>
                <Header title="New Header" />
            </div>
        );
    }
}

export default App
