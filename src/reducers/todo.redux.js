import actionsRedux from "./actions.redux";
import {statusEnum} from '../utils/index'

const initialState = {
    todo: [{
        id:Math.random(),
        title:"Task 1",
        status: statusEnum.todo,
        isActive: false
    },{
        title:"Task 2",
        id:Math.random(),
        status: statusEnum.todo,
        isActive: false

    },{
        title:"Task 3",
        id:Math.random(),
        status: statusEnum.todo,
        isActive: false
    }]
}

export function todoReducer(state = initialState, action){
    let list = [...state.todo];

    switch(action.type){
        case actionsRedux.ChangeStatus.type:
            const currentItem = action.payload.item;

            let item = list.find(it=>it.id==currentItem.id);
            item.status = action.payload.status;

            return {...state, 
                todo: list
            };
        case actionsRedux.AddItem.type:
            list.push({
                title:action.payload.name,
                id:Math.random(),
                status: statusEnum.todo,
                isActive: false
            })

            return {...state, 
                todo: list
            };
        case actionsRedux.RenoveItem.type:
            const index = list.indexOf(action.payload);
            if (index > -1) {
                list.splice(index, 1);
            }
            return {...state, 
                todo: list
            };
        default:
            return state;
    }    
}