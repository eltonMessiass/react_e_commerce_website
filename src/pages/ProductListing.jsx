import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ProductListing() {
  const [product, setProduct] = useState([])
  const [error, setError] = useState(null)

  useEffect(() =>{
    const getProducts = async () => {
      try{
        const res = await axios.get('http://127.0.0.1:8000/api/store/products/');
        // const res = await axios.get('https://fakestoreapi.com/products');
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
  <Header/>

  <div className='overflow-auto'>
    <div className='grid grid-cols-4 px-6 mt-8 w-full items-center justify-center'>
      {product.map(product => (
        <Link to="/productDetail" key={product.id} className='mx-6 w-60 h-70 my-9 border border-gray-800'>
          <img src={`http://127.0.0.1:8000/${product.image_url}/`} alt="" className='w-full h-56 '/>
          <div className='flex flex-col justify-between gap-1 mt-1'>
            <div className='flex flex-row justify-between'> 
              <p className='truncate text-xl ml-2'>{product.name}</p>
    
              <span className='text-lime-600 text-base mr-2'>${product.price}</span>
            </div>
            <Link to="/cart" className='border bg-gray-800 w-full text-white text-center'>Add to Cart</Link>
          </div>
        </Link>
      ))}
    </div>
  </div>
  
  <Footer />
</div>
  )
}

export default ProductListing
