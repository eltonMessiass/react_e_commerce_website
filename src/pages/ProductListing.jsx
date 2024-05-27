import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'

function ProductListing() {
  const [product, setProduct] = useState([])
  const [error, setError] = useState(null)

  useEffect(() =>{
    const getProducts = async () => {
      try{
        const res = await axios.get('https://fakestoreapi.com/products');
        setProduct(res.data);
        console.log(res.data)
      } catch (error) {
        setError(error)
      }
      
    }
    getProducts();
  },[])
  return (
    <div className='flex flex-col'>
        <Header />

        <div className='grid grid-cols-4 relative px-6  w-full items-center  justify-center'>
          {product.map(product => (
            <div  key={product.id} className='mx-6 w-60 h-60 my-6'>
              <img src={product.image} alt="" className='w-full h-56'/>
              <div className='flex flex-row'>
                <p>{product.title}</p>
                <span>${product.price}</span>
              </div>
            </div>
          ))}
        
        </div>
        <Footer />
    </div>
  )
}

export default ProductListing
