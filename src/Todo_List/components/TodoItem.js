
import TodoItemStyle from '../styles/modules/todoItem.module.scss';
import {MdDelete,MdEdit, MdFormatClear} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../slices/todoSlices';
import { useEffect, useState } from 'react';
import TodoModal from './TodoModal';

export default function TodoItem({todo}) {
    const dispatch = useDispatch();
    const [checked,setChecked] = useState(false);
    const [updateModalOpen,setUpdateModalOpen] = useState(false);
    const handleDelete = () => 
    {
        dispatch(deleteTodo(todo.id));
        console.log("Delete");
    }
    const handleUpdate = () => 
    {
        setUpdateModalOpen(true);
    }
    useEffect(()=>{
        if(todo.status === "Incomplete")
        {
            setChecked(true);
        }else{
            setChecked(false);
        }
    }, [todo.status]);
  return (
    <>
    <section className={TodoItemStyle.item}>
        <div className={TodoItemStyle.todoDetails}>
            <button checked={checked} setChecked={setChecked}></button>
            <div className={TodoItemStyle.texts}>
                {/* This is Area refer To is it Todo Status Completed or InCompleted */}
                {todo.status === 'Incomplete' ? 
                    <p className={TodoItemStyle.todoText}>{todo.title}</p>                    
                    : <p className={[TodoItemStyle.todoText,TodoItemStyle.completed].join(' ')} >
                        {todo.title}
                </p>}
                <time className={TodoItemStyle.time}>
  {new Date(todo.time).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour12: true,
  })}
</time>

            </div>
        </div>
        <section className={TodoItemStyle.todoActions}>
            <div 
                className={TodoItemStyle.icon}
                onClick={()=> handleUpdate()}
                onKeyDown={()=> handleUpdate()}
                role="button"
                tabIndex={0}
                >
                <MdEdit />
            </div>
            <div             
                className={TodoItemStyle.icon}
                onClick={()=> handleDelete()}
                onKeyDown={()=> handleDelete()}
                role="button"
                tabIndex={0}
                >
                <MdDelete />
            </div>
        </section>
    </section>
    <TodoModal 
        type='update'
        todo={todo}
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
    />
    </>
  )
}
