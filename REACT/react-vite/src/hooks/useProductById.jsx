import React, { useEffect, useState } from 'react'

const useProductById = (productId) => {
    const [productDetailData, setProductDetailData] = useState([]) 
    const [isLoading, setIsLoading] = useState(false)
  
    const productDetail = async () =>{
        try {
          setIsLoading(true)
          const res = await fetch(`https://dummyjson.com/products/${productId}`)
          console.log(res)
          const data = await res.json();
          setProductDetailData(data)
          setIsLoading(false)
        } catch (error) {
          console.log("internal server error in detail page ");   
          setIsLoading(false)  
    }     
  }

  useEffect(()=>{
    productDetail();
  },[productId])
  console.log("Product Detail sir ",productDetailData)

  return {productDetailData, isLoading}
}

export default useProductById