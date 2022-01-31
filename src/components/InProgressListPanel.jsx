import React from "react";
import Panel from "./PanelList";
import {statusEnum} from '../utils'

const TodoListPanel = ({todoList = []})=>{
    const list = todoList.filter(p=>p.status==statusEnum.progress);

    return (<Panel title="In Progress" list={list} theme="is-warning"/>)
}

export default TodoListPanel;