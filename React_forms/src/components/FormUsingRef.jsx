import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const FormUsingRef = () => {
    const name=useRef('')
    const lastName=useRef('')
    const mobile=useRef('')

    function handleSubmit(e){
        e.preventDefault()
        const data= {
            name: name.current,
            lastName: lastName.current,
            mobile:mobile.current
        }
        console.log(data)

    }
    useEffect(()=>{
        console.log('component is re-rendering');
        
    })
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter First Name' onChange={(e)=>name.current= e.target.value} />
            <br /> <br />
            <input type="text" placeholder='Enter Last Name' onChange={(e)=>lastName.current= e.target.value} />
            <br /><br />
            <input type="text" placeholder='Enter Mobile Number' onChange={(e)=>mobile.current= e.target.value} />
            <br /><br />
            <input type="submit"  />
        </form>
    </div>
  )
}

export default FormUsingRef