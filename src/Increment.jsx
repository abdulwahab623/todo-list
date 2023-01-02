import React, { useState } from 'react'
import "./Incree.css"

const Increment = () => {

    const [num,setNum] = useState(0);

    const incNum = ()=>{
        setNum (num+1)
    }
    const decNum = ()=>{
      if (num > 0){
        setNum(num-1)
    }else {
        alert("sorry,limit Reached")
        setNum(0)
        
    }
    }
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
            <h1>{num}</h1>
           <div className='btn_div'>
            <button onClick={incNum}>increment</button>
            <button onClick={decNum}>Decrement</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Increment
