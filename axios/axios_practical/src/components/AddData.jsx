import React, { useEffect, useState } from 'react'
import axios from 'axios'
const AddData = () => {

  function addDatainDb(){
    const newMovie={
      name:"hero",
    year:1994,
    rating:9.2,
    genre:"Drama",
    director:"Frank Darabont",
    image:"https://th.bing.com/th/id/OIP.fS7drXelAzXScI8AZCpW0QHaKX?w=202&h=282&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    }
    const addFetchdata=async function(){
      try {
        const response= await axios.post("http://localhost:3001/movies",newMovie)
        
    console.log("POST Response (fetch):", response.data);
      } catch (error) {
    console.error(error)
      }
    }
    addFetchdata();
  }
   
  return (
    <div>
        <button onClick={addDatainDb}>Add</button>
    </div>
  )
}

export default AddData