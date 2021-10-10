import React, { useState } from 'react'


const Createtask = (props) =>{

    const [entry, setEntry] = useState('') 

    const [todos, setTodos] = useState([]) 

  
    
    const saveEntry = (e) => {  //manjeando la entrada del input
        setEntry(e.target.value)
    }

    const saveTodosHandler = (e) => {
        e.preventDefault()
        const newTodos = todos.concat(entry)
        setTodos(newTodos)
    }
    const deleteTodosHandler = (e) => {
        e.preventDefault()
        const
    }
function showElement(current) {
    return <div class="task">
        <form className="taskContainer" onSubmit={deleteTodosHandler}>
        <p>{current}</p>
        <button type="delete">Terminar</button>
        </form>
    </div>
}
    

        return (
        <form className="main-box__input-container" onSubmit={saveTodosHandler}>
           <input onChange={saveEntry} type="text" name="main-box__Addtask" className="main-box__Addtask" placeholder="Agrega una actividad" value={entry} />
           <button className="main-box__input-button" value="Capturar">Guardar</button>
           {
           todos.map(showElement)
    }
        </form>
    );
   
}
export default Createtask;