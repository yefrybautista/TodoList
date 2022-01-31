import React from "react";
import Panel from "./PanelList";
import {statusEnum} from '../utils'
import useTodoList from "../hooks/useTodoList";

const TodoListPanel = ({todoList = []})=>{
    const list = todoList.filter(p=>p.status==statusEnum.todo);
    const {changeStatus} = useTodoList()

    const changeStatusHandle = ({status, item})=>{
        changeStatus(status, item);
    }
    return (<Panel title="Todo" list={list} theme="is-info" onChangeStatus={changeStatusHandle}/>)
}

export default TodoListPanel;