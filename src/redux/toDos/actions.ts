import axios from "axios";
import { RootStateOrAny } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Url } from "../../library/url";


const todoActions = {
    CHANGE_TODO: 'CHANGE_TODO',
    INIT_DATA: 'INIT_DATA',
    FETCH_TODO_FAILURE: 'FETCH_TODO_FAILURE',
    
    addTodo: (todo: ITodo): ThunkResult<Promise<void>> => {

        return async (dispatch: ThunkDispatch<ITodoState, null, ITodoAction>, getState: () => RootStateOrAny) => {

            try {
                const res = await axios.post(`${Url.base}todos`, todo);
                const todos = getState().Todos.todos;
                //todos.unshift(res.data);
                todos.unshift(todo);
                dispatch({
                    type: todoActions.CHANGE_TODO,
                    todos
                });

            } catch (error) {
                dispatch({
                    type: todoActions.FETCH_TODO_FAILURE,
                    error: error
                });
            }
            
      };
    },
    editToDo: (updated: ITodo, id: number): ThunkResult<Promise<void>> => {

        return async (dispatch: ThunkDispatch<ITodoState, null, ITodoAction>, getState: () => RootStateOrAny) => {

            try {
                const res = await axios.put(`${Url.base}todos/${id}`, updated);
                const oldTodos = getState().Todos.todos;
                const todos: ITodo[] = [];
                oldTodos.forEach((todo: ITodo) => {
                    if (todo.id !== updated.id) {
                      todos.push(todo);
                    } else {
                      todos.push(updated);
                    }
                });
                
                dispatch({
                    type: todoActions.CHANGE_TODO,
                    todos
                });

            } catch (error) {
                console.log(error);
                dispatch({
                    type: todoActions.FETCH_TODO_FAILURE,
                    error: error
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
                    todos: res.data as ITodo[]
                });

            } catch (error) {
                dispatch({
                    type: todoActions.FETCH_TODO_FAILURE,
                    error: error
                });
            }    
          };
        
    },
    allCompleted: () => {
        return async (dispatch: ThunkDispatch<ITodoState, null, ITodoAction>, getState: () => RootStateOrAny) => {

            const oldTodos = getState().Todos.todos;
            const todos: ITodo[] = [];
          
            oldTodos.forEach((todo: ITodo) => {
                todo.completed = true;
                todos.push(todo);
            });
          
            dispatch({
            type: todoActions.CHANGE_TODO,
            todos,
          });
        };
      },
  
  };
  export default todoActions;
  