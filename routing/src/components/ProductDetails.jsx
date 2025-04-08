import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const [singleProduct,setSingleProduct]=useState({})
    const params=useParams()
    const navigate=useNavigate()
    // console.log(params)
    async function getSingleData(){
           const singleData=await axios.get(`https://fakestoreapi.com/products/${params.id}`)
           setSingleProduct(singleData.data)
    }
    useEffect(()=>{
        getSingleData()
    },[])
  return (
    <>
    <button onClick={(()=>navigate("/contact"))}>Go Back</button>
    <div style={{width:"100px"}}>
        <img width='50px' src={singleProduct.image} alt="" />
        <h1>{singleProduct.title}</h1>
        <p>{singleProduct.price}</p>
    </div>
    </>
  )
}

export default ProductDetails