import React from 'react'
import axios from 'axios'
const PatchData = () => {

    function handlePatchData(id){
        const newData={
            "name": "kaho na pyar tha ,hai nahi",
      "year": 1900,
      "rating": 2,
        }
       const patchData= async function(){
        try {
            const response=await axios.patch(`http://localhost:3001/movies/${id}`,newData)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
       
        
       }
       patchData()
    }

  return (
    <div>
        <button onClick={()=>handlePatchData(2)}>Patch</button>
    </div>
  )
}

export default PatchData