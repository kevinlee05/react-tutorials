import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { articles: state.articles };
};

//The List component receives the prop articles which is a copy of the articlesarray. Such array lives inside the Redux state
const ConnectedList = ({articles}) => (
    <ul className="list-group list-group-flush">
        {articles.map(el => (
            <li className="list-group-item" key={el.id}>
                {el.title}
            </li>
        ))}
    </ul>
)

const List = connect(mapStateToProps)(ConnectedList);
//the component gets exported as List. List is the result of connecting the stateless component ConnectedList with the Redux store.

//A stateless component does not have its own local state. Data gets passed to it as props

export default List;
