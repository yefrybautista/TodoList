import React from "react";
import {statusEnum} from "../utils"
import {FaAngleDown} from 'react-icons/fa'
import { useState } from "react";

const DropDownItem = ({status, onClick = ()=>{}})=>{
    return ( <label className="dropdown-item" onClick={()=>onClick(status)}>
                {status}
            </label>)
}

const StatusDropDown = ({onStatusChange = (status)=>{}, item={}})=>{
    const listStatus = Object.keys(statusEnum).map(ky=>statusEnum[ky]);
    const [isDropActive, setIsDropActive] = useState(false);

    const onItemsClick = (status)=>{ 
        onStatusChange(status,item);
        toggleButton();
    };

    const toggleButton = ()=>setIsDropActive(!isDropActive);

    return (<div className={`dropdown ${isDropActive && "is-active"}`}>
                <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3" onClick={toggleButton}>
                    <span>{item.status}</span>
                    <span className="icon is-small">
                        <FaAngleDown aria-hidden="true"/>
                    </span>
                </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                <div className="dropdown-content">
                    {listStatus.filter(st=>st!=item.status).map((status,indx)=><DropDownItem key={`${indx}-${status}`} 
                                                                onClick={onItemsClick}
                                                                status={status}/>)}
                </div>
            </div>
        </div>)
}

export default StatusDropDown;