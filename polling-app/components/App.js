import React, {Component} from 'react';
import io from 'socket.io-client';
import Header from './parts/Header';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 'disconnected',
            title: ''
        }
        // functions need to be bound to this when extending Component
        this.connect = this.connect.bind(this);
        this.disconnect = this.disconnect.bind(this);
        this.welcome = this.welcome.bind(this);
    }

    componentWillMount(){
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect);
        this.socket.on('disconnect', this.disconnect);
        this.socket.on('welcome', this.welcome);
    }

    connect(){
        this.setState({ status: 'connected'});
    }

    disconnect(){
        this.setState({ status: 'disconnected'});
    }

    welcome(serverState){ //serverstate comes from the server
        this.setState({ title: serverState.title });
    }

    render(){ //ES6 shorthand for render = function()
        return (
            <div>
                <Header title={this.state.title} status={this.state.status} />
            </div>
        );
    }
}

export default App
