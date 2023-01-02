import React, { useState } from 'react'
import './App.css' 
import Lists from './Lists'

const App = () => {

  const[inputList , setInputList]= useState("")
  const [items, setItems] = useState([])

  const inputEvent = (event) =>{
    setInputList(event.target.value)
  }
  const listOfItem = () => {
    setItems((olditems) =>{
      return [...olditems , inputList];
    });
    setInputList ("");
  };

  const deleteItem = (id) =>{
    console.log("deleted")
    setItems((olditems)=>{
      return olditems.filter((aeeElem , index)=>{
        return index!==id
      })
    })
}
  return (
    <>
    <div className='main_div'>
        <div className='center_div'>
         <br/>
         <h1>ToDo list</h1> 
         <br />
         <input type=" text"  
         placeholder='Enter data'
         onChange={inputEvent}
         value= {inputList}/>
         <button onClick={listOfItem}>+</button>

         <ul>
          
          {items.map((itemval, index)=>{
            return <Lists 
            key={index} 
            id = {index}
            text = {itemval}
            onSelect= {deleteItem} />
          })}
         </ul>
        </div>
    </div>
    </>
  )
}

export default App
