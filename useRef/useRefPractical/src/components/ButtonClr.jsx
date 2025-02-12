import React, { useRef } from 'react'

const ButtonClr = () => {
    const colorRef=useRef(null)
    function colorKaro(){
     colorRef.current.style.backgroundColor="red"
    }
  return (
    <div>
        <button ref={colorRef}>mujhe color kar do</button>
        <button onClick={colorKaro}>haa karta hu</button>
    </div>
  )
}

export default ButtonClr