import React, { useRef } from 'react'

const InputFocus = () => {

    const refer=useRef(null)

    function handleFocus(){
          console.log(refer)
    }
  return (
    <div>
        <input type="text" ref={refer} placeholder='write something...' />
        <button onClick={handleFocus}>focus</button>
    </div>
  )
}

export default InputFocus