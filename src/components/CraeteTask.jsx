import React, {useState} from 'react';
import useTodoList from '../hooks/useTodoList';


const CreateTask = (props)=>{
    const {handleModal} = props;
    const [formValues, setFormvalues] = useState({name:"", id:0});
    const {name, id} = formValues;
    const {addItem} = useTodoList()
    
    const HandleOnChange = ({target})=>{
        setFormvalues({
            ...formValues, [target.name]: target.value
        })
    }

    const HandleSubmit = (e)=>{
        e.preventDefault();
        if(name.trim() != ""){
            addItem(formValues);
        }
        handleModal();
    }
    return(
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="box">
                    <h2>Create new task</h2>
                    <form onSubmit={HandleSubmit}>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input onChange={HandleOnChange} name="name" value={name} className="input" type="text" placeholder="Task name"/>
                </div>
            </div>
            
            <button disabled = {name.trim() == "" ? true : false}  className='button  is-link'>Save</button>
        </form>
                </div>
            </div>
            <a className="modal-close is-large" aria-label="close" onClick={handleModal}></a>
</div>
        
    )
}

export default CreateTask;