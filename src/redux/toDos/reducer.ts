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
            };
        
        case actions.INIT_DATA: {
            return {
                ...state,
                todos: action.todos
            };
        }
        case actions.FETCH_TODO_FAILURE: {
            return {
                ...state,
                error: action.error
            };
        }
        default:
            return state;
    }
    
}