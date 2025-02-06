import React, { useEffect, useState } from 'react'
import axios from "axios"
const GetData = () => {
    const [loading,setLoading]=useState(true)
    const [data, setData] = useState([])
    const [error,setError]=useState(null)

    useEffect(()=>{
         const fetchData= async function(){
            try {
                const response=await axios.get("http://localhost:3001/movies")
                //  const data= await response.json()
                // console.log(response)
                 setData(response.data)
                 setLoading(false)

            } catch (error) {

                setError(error.message)
                setLoading(false)
            }
         }
         fetchData()
    },[])
  return (
    <div>
        {loading ? (<h1>Loading</h1>): error ? (<h1>{error}</h1>):(
         <>{data.map((e,i)=>{
            return <div key={e.id}>
               <img src={e.image} />
               <h1>{e.name}</h1>
            </div>
         })}</>)
        }
    </div>
  )
}

export default GetData