import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import "../../styles/index.css"


const TodoList = () => { 

    const [tarea, setTarea] = useState(""); 

    const [agregarTarea, setAgregarTarea] = useState([]);

    const [hover, setHover] = useState(null)

     const handleKeyDown = (e) => {
        if ( e.key === "Enter") {
            setAgregarTarea([...agregarTarea, tarea])
            setTarea("");
    }
    }
    const handleOnChange = (e) => {
        setTarea(e.target.value)
    }
    const handleDelete = (index) => { 
        const eliminarTarea = agregarTarea.filter((agregarTarea,i) => i !== index )
        setAgregarTarea(eliminarTarea)
    }

    return ( 
        
        <div className="container">
            <h1 className="mt-4 p-4 text-align-center">¿Que tareas tienes para hoy?</h1>
            <div className="container">
                <input className="form-control rounded my-4 text-center"
                       type="text"
                       value={tarea}
                       onChange={handleOnChange}
                       onKeyDown={handleKeyDown}
                       placeholder="Agrega una Tarea y presiona Enter"/> 

            <ul className="list-group list-group-flush">
                
            {
                agregarTarea.length > 0 ? agregarTarea.map((agregarTarea, index)=>{
                    return (
                        <li id="lista" 
                        className="list-group-item mt-2" 
                        key={index} 
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(null)}>
                            {agregarTarea}
                            {hover === index && (
              <FontAwesomeIcon
                className="text-danger float-end"
                icon={faXmarkCircle}
                size="lg"
                onClick={() => handleDelete(index)}
              />
            )}
                        </li>
                        
                    )
                }) 
                : 
                <h3>¡Felicicades, no tienes nada que hacer por hoy!</h3>
            }
             </ul>
            </div>
            

        </div>
        
    )
}
export default TodoList

//<FontAwesomeIcon className="float-end" icon={faXmarkCircle} size="lg" onClick={()=>{handleDelete(index)}}/>