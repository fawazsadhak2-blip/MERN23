import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import Header from "./components/Header";
import HeroSection from "./pages/HeroSection";
import Footer from "./components/Footer";
import { ProductCard, ProductSection } from "./pages/ProductSection";
import Counter from "./pages/counter";
import Comments from "./pages/comments";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Dynamic from "./pages/ProductDetails";
import ProductDetails from "./pages/ProductDetails";
import Route from "./route/Route";
import { AppContext, AppProvider } from "./context/AppContext";
// const headingReactElement = React.createElement("h1" , { id: "heading"} , "Hello World -\ ")

// JSX -> HTML in js (html like syntax) -> (xml like syntax)
// const paraElement = <h1>Hello JSX ... </h1>


// const Applayout = () => {

//   var [count,setCount] = useState(10)
//   var [name, setName] = useState("Raj")
//   var [valid , setValid] = useState("false")
 
//   useEffect(()=>{
//     setCount(count+1)
//   },[name,valid])

  
//   return (
//     <div>
//       <Header />
//       <Outlet />
//       {/* <HeroSection /> */}
//       {/* <ProductCard /> */}
//       {/* <ProductSection /> */}
//       {/* <h1>{count}</h1>
//       <h2>{name}</h2>
//       <p>{valid}</p>
//       <button onClick={()=>{
//         setName("Ram")
//       }}>change </button>

//       <button onClick={()=>{
//         setValid("true")
//       }}>Update</button> */}
//       {/* <Counter />
//       <Comments /> */}
//       <Footer />
//     </div>
//   )
// }

// const Home = () => {
//   return (
//     <div>
//       <HeroSection/>
//       <ProductSection/>
//     </div>
//   )
// }

// const Route = createBrowserRouter([{
//   path: "/",
//   element: <Applayout/>,
//   children:[
//     {path: "/",
//       element: <Home />,
//     },
//     { path: "/comments",
//       element: <Comments />},
//     {path: "/counter",
//       element: <Counter />
//     },
//     {
//       path: "/productDetail/:productId",
//       element: <ProductDetails />
//     },
//   ],
//   errorElement: <ErrorPage/>
// },
// ]);

const ReactRoot = ReactDOM.createRoot(document.getElementById("root"))
ReactRoot.render(<AppProvider>
    <RouterProvider router={Route} />
</AppProvider>
)
