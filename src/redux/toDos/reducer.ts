import actions from "./actions";

const initState: ITodoState = {
    todos: []
}

export default function toDoReducer(state = initState, action: ITodoAction) {

    switch (action.type) {

        case actions.CHANGE_TODO:
            return {
                ...state,
                todos: action.todos,
                loading: action.loading
            };
        
        case actions.INIT_DATA: {
            return {
                ...state,
                todos: action.todos,
                loading: action.loading
            };
        }
        case actions.FETCH_TODO_FAILURE: {
            return {
                ...state,
                error: action.error,
                loading: action.loading
            };
        }
        
        case actions.FETCH_TODO_REQUEST:
            return {
                ...state,
                loading: action.loading
            };
        
        default:
            return state;
    }
    
}