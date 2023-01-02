import React from 'react'
import './App.css'

const Lists = (props) => {

    
  return  (
    <> 
    <div className='todo_style'>
        
        <button className='fa-times' onClick={() =>{
          props.onSelect(props.id)  
        }}>+</button>
    <li> {props.text}</li>
    </div>
    </>)
  
}

export default Lists
