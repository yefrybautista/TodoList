import React, { useState } from 'react';
import {DoneListPanel, InProgressListPanel, TodoListPanel} from '.';
import useTodoList from '../hooks/useTodoList';
import CreateTask from './CraeteTask';

const BoardTodoList = ()=>{
    const {todoList} = useTodoList();
    const [showModal, setShowModal] = useState(false);

    const handleModal = ()=>{
        setShowModal(!showModal)
    }
    return (
        <div className="box">
            <h1 className="title">Todo List System</h1>
            <h2 className="subtitle">Management your live</h2>

            <a className="button  is-link" onClick={handleModal}>
                Add Task
            </a>
            <hr/>

            {showModal && <CreateTask handleModal={handleModal}/>}

            <div className="columns">
                <div className="column is-one-third">
                    <TodoListPanel todoList={todoList}/>
                </div>
                <div className="column is-one-third">
                    <InProgressListPanel todoList={todoList}/>
                </div>
                <div className="column is-one-third">
                    <DoneListPanel todoList={todoList}/>
                </div>
                </div>
            </div>
       )
}

export default BoardTodoList;