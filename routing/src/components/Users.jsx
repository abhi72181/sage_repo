import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/Products.css'
import { Link, useSearchParams } from 'react-router-dom'
const Users = () => {
    const [users, setUsers] = useState([])
    const [searchParams,setSearchParams]=useSearchParams()
    const [page,setPage]=useState(+searchParams.get('page'))
    const [limit,setLimit]=useState(4)
    const [totalPages,setTotalPages]=useState(1)
    const [searchText,setSearchText]=useState(searchParams.get('q') ||'')
    
    
    const url='https://reqres.in/api/users'

    async function getUsers(){
        const getData=await axios.get(`${url}?page=${page}&per_page=${limit}`)
        console.log(getData.data.data)
        setUsers(getData.data.data)

        const totalUsers=getData.data.total
        setTotalPages(Math.ceil(totalUsers/limit))

    }

    // console.log(searchText)

    const filteredUsers=users.filter((e)=>(e.first_name.includes(searchText) || e.last_name.includes(searchText) || e.email.includes(searchText)))

    useEffect(()=>{
    getUsers()
    },[page])

    useEffect(()=>{

      if(searchText){
        setSearchParams({page:page,per_page:limit,q:searchText})
      }
      else{
        setSearchParams({page:page,per_page:limit})
      }

    },[searchText])

  return (
    <>
    <button disabled={page<=1} onClick={ ()=>setPage(page-1)}>-</button>
    <h1>{page}</h1>
    <button disabled={page>=totalPages} onClick={()=>setPage(page+1)}>+</button>
    <br />
    <h1>page: {page} of {totalPages}</h1>

    <br /><br /><br /><br />

    <input type="text" placeholder='search user' value={searchText}  onChange={(e)=>setSearchText(e.target.value)}  />
    
    <div className='product_container'>
        {filteredUsers.map((e,i)=>(<div className='product_card'>
         <img src={e.avatar} alt="" />
         <h1>{e.first_name} {e.last_name}</h1>
         <h2>{e.email}</h2>
         <Link to={`${e.id}`} >View User details</Link>
        </div>))}
    </div></>
  )
}

export default Users