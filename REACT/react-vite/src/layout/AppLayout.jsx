import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import UserStore from "../store/UserStore"
const Applayout = () => {

//   var [count,setCount] = useState(10)
//   var [name, setName] = useState("Raj")
//   var [valid , setValid] = useState("false")
 
//   useEffect(()=>{
//     setCount(count+1)
//   },[name,valid])

  
  return (
    <UserStore.Provider value={{name:"Mern stack"}} >
      <Header />
      <Outlet />
      {/* <HeroSection /> */}
      {/* <ProductCard /> */}
      {/* <ProductSection /> */}
      {/* <h1>{count}</h1>
      <h2>{name}</h2>
      <p>{valid}</p>
      <button onClick={()=>{
        setName("Ram")
      }}>change </button>

      <button onClick={()=>{
        setValid("true")
      }}>Update</button> */}
      {/* <Counter />
      <Comments /> */}
      <Footer />
    </UserStore.Provider>
  )
}
export default Applayout