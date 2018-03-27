import React from 'react';

class Speaker  extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            status: props.status
        }

    }

    render(){
        return(<h1>Speaker: {this.state.status}</h1>)
    }

}

export default Speaker ;
