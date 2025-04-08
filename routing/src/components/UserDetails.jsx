import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
    const [singleUser,setSingleUser]=useState({})
    const params=useParams()
    const navigate=useNavigate()
    const url='https://reqres.in/api/users'
    console.log(params)

    async function getUser(){
        const getUserdetail=await axios.get(`https://reqres.in/api/users/${params.id}`)
        // console.log(getUserdetail.data.data.id)
        console.log(getUserdetail.data.data)
        setSingleUser(getUserdetail.data.data)
    }
    useEffect(()=>{
     getUser()
    },[])
  return (
    <>
    <button onClick={()=>navigate(-1)}>Go Back</button>
    <div>
        <img src={singleUser.avatar} alt="" />
        <h1>{singleUser.first_name} {singleUser.last_name}</h1>
        <h2>{singleUser.email}</h2>
    </div>
    </>
  )
}

export default UserDetails