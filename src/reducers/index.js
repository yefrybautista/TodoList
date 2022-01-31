import actions from './actions.redux'

export const selectedTodo = state=>state.todo;

export const {ChangeStatus, RenoveItem, AddItem} = actions;