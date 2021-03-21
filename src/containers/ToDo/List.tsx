import React, { FC, useState } from 'react';
import { TodoListWrapper } from '../../components/styles';
import { StatusTab } from '../../components/StatusTab/StatusTab';
import  SingleTask  from './SingleTask';
import Loader from '../../components/Loader/Loader';


const filterTodos = (todos: ITodo[], search: string) => {
  
  const selectedTodos =
    search === 'All'
      ? todos
      : todos.filter((todo) => todo.completed === (search === 'Completed'));
  
  return { selectedTodos };
};

interface ListProps{
  todos: Array<any>;
  editTodo: (todo: ITodo) => void;
}

const TodoList: FC<ListProps> = ({
  todos,
  editTodo,
}) => {
  
  const [search, setSearch] = useState('All');
  
  const onChange = (event: any) => {
    setSearch(event.target.value);
  };
 
  const { selectedTodos } = filterTodos(todos, search);

    return (
      <TodoListWrapper className="TodoContent">  
        <StatusTab   
          onChange={(e) => onChange(e)}      
          options={['All', 'Completed', 'UnCompleted']}   
          value={search}
        />
        <div className="TodoListWrapper">
          {selectedTodos.length > 0 ? (
            selectedTodos.map(note => {
            return (
              <SingleTask
                key={note.id}
                editTodo={(todo)=>editTodo(todo)}
                todo={note}
              />  
            )
            })
          ) : (
              <Loader/>
          )}
        </div>
        <div className="TodoFooter">
        </div>
    
      </TodoListWrapper>
    )
};

export default TodoList;

