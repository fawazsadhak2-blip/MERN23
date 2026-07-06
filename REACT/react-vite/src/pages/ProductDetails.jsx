import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useProductById from '../hooks/useProductById'
import { AppContext } from '../context/AppContext'

const ProductDetails = () => {
  // const data = useParams();
  const { productId } = useParams()

  const {text,name} = useContext(AppContext)
  // const [productDetailData, setProductDetailData] = useState([]) 
  
  // const productDetail = async () =>{
  //   try {
  //     const res = await fetch(`https://dummyjson.com/products/${productId}`)
  //     console.log(res)
  //     const data = await res.json();
  //     setProductDetailData(data)
  //   } catch (error) {
  //     console.log("internal server error in detail page ");            
  //   } 
  // }

  // useEffect(()=>{
  //   productDetail();
  // },[])
  // console.log("Product Detail sir ",productDetailData)
  const {isLoading , productDetailData} = useProductById(productId)
  
  if(isLoading){
    return <p>Loading...</p>
  }else{
    return (
    // <div>Product Details </div>
    <div className="p-6">
      <p>{text}</p>  

  <img
    src={productDetailData.thumbnail}
    alt={productDetailData.title}
    className="w-80 rounded-lg"
  />

  <h1 className="text-3xl font-bold mt-4">
    {productDetailData.title}
  </h1>

  <p className="text-gray-600 mt-2">
    {productDetailData.description}
  </p>

  <h2 className="text-2xl font-bold mt-4">
    ${productDetailData.price}
  </h2>

  <p>Discount: {productDetailData.discountPercentage}%</p>

  <p>Rating: ⭐ {productDetailData.rating}</p>

  <p>Stock: {productDetailData.stock}</p>

  <p>Brand: {productDetailData.brand}</p>

  <p>Category: {productDetailData.category}</p>

  <p>SKU: {productDetailData.sku}</p>

  <p>Weight: {productDetailData.weight} g</p>

  <p>Warranty: {productDetailData.warrantyInformation}</p>

  <p>Shipping: {productDetailData.shippingInformation}</p>

  <p>Availability: {productDetailData.availabilityStatus}</p>

  <p>Return Policy: {productDetailData.returnPolicy}</p>

  <p>Minimum Order: {productDetailData.minimumOrderQuantity}</p>

</div>
    
  )
}
  }
  

export default ProductDetails