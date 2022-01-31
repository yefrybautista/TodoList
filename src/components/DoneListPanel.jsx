import React from "react";
import Panel from "./PanelList";
import {statusEnum} from '../utils'

const DoneListPanel = ({todoList = []})=>{
    const list = todoList.filter(p=>p.status==statusEnum.done);

    return (<Panel title="Done" list={list} theme="is-success"/>)
}

export default DoneListPanel;