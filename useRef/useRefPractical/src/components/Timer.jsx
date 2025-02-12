import React, { useRef, useState } from 'react'

const Timer = () => {
    const [startTimer,setStartTimer]=useState(0)
    // const [id,setId]=useState(null)
    const intervalRef=useRef(null)
   
    function handleStart(){
        if(intervalRef.current!=null){
            return
        }
         intervalRef.current= setInterval(()=>{
               
            setStartTimer(prev => prev +1)
        },1000)
        
        
    }

    function handleStop(){
        clearInterval(intervalRef.current)
        intervalRef.current=null
    }

    function handleReset(){
        clearInterval(intervalRef.current)
        setStartTimer(0)
        intervalRef.current=null
    }

  return (
    <div>
        <h1>{startTimer}</h1>
        <button onClick={handleStart}>Start</button>
        <br /><br />
        <button onClick={handleStop}>Stop</button>
        <br /><br />
        <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default Timer