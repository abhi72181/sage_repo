import axios from 'axios'
import React from 'react'

const PutData = () => {
    function handlePutData(id){
        const newData={
            "name": "karan arjun",
      "year": 1900,
      "rating": 2,
      "genre": "Drama",
      "director": "Frank Darabont",
      "image": "https://th.bing.com/th/id/OIP.fS7drXelAzXScI8AZCpW0QHaKX?w=202&h=282&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        }
       const putData= async function(){
        try {
            const response=await axios.put(`http://localhost:3001/movies/${id}`,newData)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
       
        
       }
       putData()
    }
  return (
    <div>
        <button onClick={()=>handlePutData(2)}>Put</button>
    </div>
  )
}

export default PutData