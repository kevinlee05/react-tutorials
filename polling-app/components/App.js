import React, {Component} from 'react';
import io from 'socket.io-client';
import Header from './parts/Header';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 'disconnected'
        }
        // functions need to be bound to this when extending Component
        this.connect = this.connect.bind(this);
        this.disconnect = this.disconnect.bind(this);
    }

    componentWillMount(){
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect);
        this.socket.on('disconnect', this.disconnect)
    }

    connect(){
        alert("Connected: " + this.socket.id);
    }

    disconnect(){
        this.setState({ status: 'disconnected'});
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
