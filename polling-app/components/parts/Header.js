import React, {Component} from 'react';
import PropTypes from 'prop-types'; //proptypes has been separated into a different package from react 15+

class Header extends Component {

    render(){
        return(
            <header>
                <div>
                <span>
                    <h1 id="title"> {this.props.title} </h1>
                    {this.props.status == 'connected' ?
                        <div id="green_circle"></div> :
                        <div id="red_circle"></div> }
                </span>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
        title: PropTypes.string.isRequired
};

export default Header
