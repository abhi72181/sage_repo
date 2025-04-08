import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/Products.css'
import { Link } from 'react-router-dom'
const Products = () => {
    const [products,setProducts]=useState([])
    const url='https://fakestoreapi.com/products'
   async function getProducts(){
       const productData= await axios.get(url)
    //    console.log(productData.data)
    setProducts(productData.data)
    }

    useEffect(()=>{
        getProducts()
    },[])
  return (
   
    <div className='product_container' >
       {products.map((e,i)=>(
        
       <div className='product_card' key={e.id}>
       <img width='100px' src={e.image} alt="" />
       <h1>{e.title}</h1>
       <p>{e.price}</p>
       <Link to={`/products/${e.id}`}>View Details</Link>
       </div>))}
    </div>
    
  )
}

export default Products