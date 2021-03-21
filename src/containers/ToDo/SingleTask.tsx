import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import React, { FC, useState } from 'react';
import { EditableContent } from '../../components/EditableContent/EditableContent';


interface ItemProps{
    todo: ITodo;
    editTodo: (toDo: ITodo) => void;
}

  
const SingleTask: FC<ItemProps> = ({
    todo,
    editTodo
}) => {

    const [completed, setCompleted] = useState(todo.completed);

    const updateTodo = ( value: string) => {
        todo['title'] = value;
        editTodo(todo);
    }
    const updateComplete = (e: CheckboxChangeEvent) => {

        setCompleted(e.target.checked);
        todo['completed'] = e.target.checked;
        editTodo(todo);
    }

    return (
        <div className="TodoList" key={todo.id}>
            <Checkbox
                className="TodoCheck"
                checked={completed}
                onChange={(e: CheckboxChangeEvent) => updateComplete(e)}
            />
            <div className="TodoContentWrapper">
                <EditableContent
                    title={todo.title}
                    onChange={updateTodo}
                />
            </div>
        </div>
    );
}
export default SingleTask;
