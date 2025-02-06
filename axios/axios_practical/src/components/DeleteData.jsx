import React from 'react'
import axios from 'axios'

const DeleteData = () => {

    function handleDeleteData(id){
        
       const deleteData= async function(){
        try {
            const response=await axios.delete(`http://localhost:3001/movies/${id}`)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
       
        
       }
       deleteData()
    }

  return (
    <div>
        <button onClick={()=>handleDeleteData("6ec9")}>Delete</button>
    </div>
  )
}

export default DeleteData