import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: []
}

//Reducers produce the state of the application
//initial state is passed as a default parameter.
//The reducer calculates the next state depending on the action type. Moreover, it should return at least the initial state when no action type matches.
// When the action type matches a case clause the reducer calculates the next state and returns a new object.
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                ...state,
                articles: [...state.articles, action.payload ]
            };
            // two key points for avoiding mutations in Redux:
            // Using concat(), slice(), and …spread for arrays
            // Using Object.assign() and …spread for objects
        default:
            return state;
    }
};

export default rootReducer;
