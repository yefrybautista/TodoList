import { useDispatch, useSelector } from 'react-redux'
import {ChangeStatus,RenoveItem, selectedTodo, AddItem} from '../reducers'

export default ()=>{
    const dispatch = useDispatch();

    const todoList = useSelector(selectedTodo);

    const changeStatus = (status, item)=>{
        dispatch({...ChangeStatus, payload: {item, status}})
    }

    const removeItem = (item)=>{
        dispatch({...RenoveItem, payload:item})
    }
    const addItem = (item)=>{
        dispatch({...AddItem, payload:item})
    }
    
    return {
        todoList,
        changeStatus,
        removeItem,
        addItem
    }
}