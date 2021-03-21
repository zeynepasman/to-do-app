import axios from "axios";
import { RootStateOrAny } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Url } from "../../library/url";


const todoActions = {
    CHANGE_TODO: 'CHANGE_TODO',
    INIT_DATA: 'INIT_DATA',
    FETCH_TODO_FAILURE: 'FETCH_TODO_FAILURE',
    FETCH_TODO_REQUEST: 'FETCH_TODO_REQUEST',
    
    addTodo: (todo: ITodo): ThunkResult<Promise<void>> => {

        return async (dispatch: ThunkDispatch<ITodoState, null, ITodoAction>, getState: () => RootStateOrAny) => {

            dispatch({
                type: todoActions.FETCH_TODO_REQUEST,
                loading: true
            });

            try {
                const res = await axios.post(`${Url.base}todos`, todo);
                const todos = getState().Todos.todos;
                if (res) {
                    //todos.unshift(res.data);
                    todos.unshift(todo);
                }
                
                dispatch({
                    type: todoActions.CHANGE_TODO,
                    todos,
                    loading: false
                });

            } catch (error) {
                dispatch({
                    type: todoActions.FETCH_TODO_FAILURE,
                    error: error,
                    loading: false
                });
            }
            
      };
    },
    editToDo: (updated: ITodo, id: number): ThunkResult<Promise<void>> => {

        return async (dispatch: ThunkDispatch<ITodoState, null, ITodoAction>, getState: () => RootStateOrAny) => {

            dispatch({
                type: todoActions.FETCH_TODO_REQUEST,
                loading: true
            });
            try {
                const res = await axios.put(`${Url.base}todos/${id}`, updated);
                const oldTodos = getState().Todos.todos;
                const todos: ITodo[] = [];
                if (res) {
                    oldTodos.forEach((todo: ITodo) => {
                        if (todo.id !== updated.id) {
                          todos.push(todo);
                        } else {
                          todos.push(updated);
                        }
                    });
                    
                    dispatch({
                        type: todoActions.CHANGE_TODO,
                        todos,
                        loading: false
                    });
                }
            } catch (error) {
                console.log(error);
                dispatch({
                    type: todoActions.FETCH_TODO_FAILURE,
                    error: error,
                    loading: false
                });
            }
            
      };
    },
    initData: (): ThunkResult<Promise<void>> => {

        return async (dispatch: ThunkDispatch<ITodoState, null, ITodoAction>) => {
            
            try {
                const res = await axios(`${Url.base}todos`);
                dispatch({
                    type: todoActions.INIT_DATA,
                    todos: res.data as ITodo[],
                    loading: false
                });

            } catch (error) {
                dispatch({
                    type: todoActions.FETCH_TODO_FAILURE,
                    error: error,
                    loading: false
                });
            }    
          };
        
    }
  
  };
  export default todoActions;
  