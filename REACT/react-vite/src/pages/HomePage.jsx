// import React, { useContext } from 'react'
import HeroSection from './HeroSection'
import { ProductSection } from './ProductSection'
// import { AppContext } from '../context/AppContext'

const HomePage = () => {
  // const data = useContext(AppContext)
  // const {text, setText, name} = useContext(AppContext)
  // console.log("Data fro context ",name)

  return (
    <div>
      {/* <p>{name}</p>
      <p>{text}</p> */}
      {/* <button onClick={()=> setText("sam")}>Click </button> */}
        <HeroSection/>
        <ProductSection/>
    </div>
  )
}

export default HomePage