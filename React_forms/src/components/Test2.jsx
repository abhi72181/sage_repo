import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Test2 = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errors,setErrors]=useState({email:[],password:[]})

    function emailValidation(email){
        const emailErrors=[]
        if(email.length===0){
            emailErrors.push('Email Cannot be Empty')
        }
        
        if(!email.includes('@masaischool.com')){
            emailErrors.push('Email must be from masaischool.com')
        }
        return emailErrors
    }

    function passwordValidation(password){
        const passwordErrors=[]
        if(password.length<8){
            passwordErrors.push('Password must be at least 8 characters long')
        }
        if(password.length===0){
            passwordErrors.push('Password Cannot be Empty')
        }
        const noDigits=!password.split('').some((char)=>!isNaN(parseInt(char)))
        if(noDigits){
            passwordErrors.push('Password must have at least one digit')
        }
        return passwordErrors
    }

    function handleEmailChange(e){
      const updatedEmail=e.target.value
      setEmail(updatedEmail)
      setErrors({...errors,email:emailValidation(updatedEmail)})
    }
    function handlePasswordChange(e){
        const updatedPassword=e.target.value
        setPassword(updatedPassword)
        setErrors({...errors,password:passwordValidation(password)})
    }

    function handleSubmit(e){
        e.preventDefault()
        if(errors.email.length===0 && errors.password.length===0){
            alert('success')
        }
    }

    useEffect(()=>{

        const emailErrors=emailValidation(email)
        const passwordErrors=passwordValidation(password)
        setErrors({email:emailErrors,password:passwordErrors})

    },[email,password])
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={email} placeholder="Enter your email" onChange={handleEmailChange}/>
            {errors.email.map((e,i)=>{
                return <div key={i}>
                    <p style={{color:'red'}}>{e}</p>
                </div>
            })}
            <br /><br />
            <input type="text" value={password} placeholder="Enter your password" onChange={handlePasswordChange}/>
            {errors.password.map((e,i)=>{
                return <div key={i}>
                    <p style={{color:'red'}}>{e}</p>
                </div>
            })}
            <br /><br />
            <input type='submit' disabled={errors.email.length>0 || errors.password.length>0} />
        </form>
    </div>
  )
}

export default Test2