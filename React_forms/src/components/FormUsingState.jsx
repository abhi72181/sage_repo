import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const FormUsingState = () => {
    const [name, setName] =useState('');
    const [lastName,setLastName]=useState('')
    const [mobile,setMobile]=useState('')

    function handleSubmit(e){
        e.preventDefault()
        console.log(name,lastName,mobile)

    }

    useEffect(()=>{
        console.log('component is re-rendering')
    })
   
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter First Name' onChange={(e)=>setName(e.target.value)} />
            <br /> <br />
            <input type="text" placeholder='Enter Last Name' onChange={(e)=>setLastName(e.target.value)} />
            <br /><br />
            <input type="text" placeholder='Enter Mobile Number' onChange={(e)=>setMobile(e.target.value)} />
            <br /><br />
            <input type="submit"  />
        </form>
    </div>
  )
}

export default FormUsingState