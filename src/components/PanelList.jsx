import React from "react";
import {FaBook, FaTrash} from 'react-icons/fa'
import useTodoList from "../hooks/useTodoList";
import StatusDropDown from "./StatusDropDown";

const defaultProps = {
    title:"",
    list: [],
    theme:"",
    onChangeStatus: ({status, item})=>{}
}
const PanelItems = ({currentItem, onChangeStatus = (status)=>{}})=>{
    const {title = "", isActive = false, status} = currentItem;
    const {removeItem} = useTodoList()
    const removeItemHandel = ()=>{
        removeItem(currentItem);
    }

    return (
            <div className="columns">
                <div className="column is-6">
                    <span className="panel-icon">
                    <FaBook/>
                    </span>
                    {title}
                </div>
                <div className={`column is-3 panel-block ${isActive && "is-active" }`}>
                    <StatusDropDown item={currentItem} onStatusChange={onChangeStatus}/>
                </div>
                <div className="column is-3">
                    <a onClick={removeItemHandel} className="button is-danger"><span className="trash-icon">
                    <FaTrash/>
                    </span></a>
                </div>
            </div>
        )
}
const EmptyItemp = ()=>{
    return (
        <label style={{textAlign:"center"}} className={`panel-block center`}>
            Not items in the list
        </label>)
}

const Panel = (props = defaultProps)=>{
    const {title = "", list = [], theme = "is-info"} = props;
    const {changeStatus} = useTodoList()

    const changeStatusHandle = ({status, item})=>{
        changeStatus(status, item);
    }
    
    

    const renderItems = ()=>{
        if(list.length==0)
            return <EmptyItemp/>

        return list.map((item)=>{
            return <PanelItems key={item.id} currentItem={item} onChangeStatus={(status)=>changeStatusHandle({status, item})}/>
        })
    }

    return (
        <article className={`panel ${theme}`}>
            <p className="panel-heading">
                {title}
            </p>
            {renderItems()}
        </article>)
}

export default Panel;