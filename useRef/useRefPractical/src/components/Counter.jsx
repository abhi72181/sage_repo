import React, { useRef, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
      let x=useRef(0)
       function handleClick(){
       
        setCount(count+1)
    
       }
    
       function handleCountVariable(){
        x.current=x.current+1
        console.log(x.current)
       }
  return (
    <div>

<div>
        <div>{count}</div>
        <button onClick={handleClick}>countState</button>
        <div>{x.current}</div>
        <button onClick={handleCountVariable}>countVariable</button>
    </div>
    </div>
  )
}

export default Counter