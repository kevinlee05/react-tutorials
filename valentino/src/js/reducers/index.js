const initialState = {
    articles: []
}

//Reducers produce the state of the application.
//initial state is passed as a default parameter.
const rootReducer = (state = initialState, action) => state;

export default rootReducer;
