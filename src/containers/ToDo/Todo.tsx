import React, { useEffect } from 'react';
import { Input, Layout } from 'antd';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { TodoWrapper } from '../../components/styles';
import TodoList from './List';
import toDoActions from "../../redux/toDos/actions";
import { notification } from '../../components/Notification';

const {
  initData,
  addTodo,
  editToDo,
  allCompleted
} = toDoActions;

const { Header, Content } = Layout;

export default function ToDo() {

  const { todos, error, loading } = useSelector((state: RootStateOrAny) => state.Todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initData());
    if (error) notification('error', error, 'Error');
  }, [dispatch]);

  

  const editTodo = (toDo: ITodo) => {
    dispatch(editToDo(toDo, toDo.id));
  };
  
  
  return (
    <Layout style={{ background: 'none' }}>
      <TodoWrapper>
        <Header className="TodoHeader">
          <Input
            placeholder={'Type here for add a new todo and enter'}
            className="TodoInput"
            onPressEnter={(event: any) => {
              dispatch(addTodo({
                'title': event.target.value,
                "completed": false,
                "id": new Date().valueOf(),
              }))
            }}
          />
        </Header>
        <Content className="TodoContentBody">
          <TodoList
            todos={todos}
            editTodo={todo => editTodo(todo)}
            allCompleted={() => dispatch(allCompleted)}
            /> 
        </Content>
      </TodoWrapper>

    </Layout>
  );
}


