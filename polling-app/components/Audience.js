import React from 'react';

class Audience extends React.Component{

    constructor(props) {
        super(props);
        console.log(props)

    }

    render(){
        return(<h1>Audience: {this.props.title}</h1>)
    }

}

export default Audience;
