import React, { FC, useState } from 'react';
import { TodoListWrapper } from '../../components/styles';
import { StatusTab } from '../../components/StatusTab/StatusTab';
import { notification } from '../../components/Notification';
import { Checkbox } from 'antd';
import  SingleTask  from './SingleTask';


const filterTodos = (todos: ITodo[], search: string) => {
  
  const selectedTodos =
    search === 'All'
      ? todos
      : todos.filter((todo) => todo.completed === (search === 'Completed'));
  let completed = 0;
  selectedTodos.forEach((todo) => {
    if (todo.completed) {
      completed += 1;
    }
  });
  return { selectedTodos, completed };
};

interface ListProps{
  todos: Array<any>;
  editTodo: (todo: ITodo) => void;
  allCompleted: () => void;
}

const TodoList: FC<ListProps> = ({
  todos,
  editTodo,
  allCompleted
}) => {
  
  const [search, setSearch] = useState('All');
  
  const onChange = (event: any) => {
    setSearch(event.target.value);
  };
 
  const { selectedTodos, completed } = filterTodos(todos, search);

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
              <h3 className="NoTodoFound">No todo found</h3>
          )}
        </div>
        <div className="TodoFooter">
          <Checkbox
            className="TodoCheckAll"
            checked={completed === selectedTodos.length}
            onChange={allCompleted}
          >
            Mark all as completed     
        </Checkbox>
        </div>
    
      </TodoListWrapper>
    )
};

export default TodoList;

