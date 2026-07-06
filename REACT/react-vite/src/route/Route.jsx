import { createBrowserRouter } from "react-router-dom";
import Applayout from "../layout/AppLayout";
import HomePage from "../pages/HomePage";
import Comments from "../pages/comments";
import Counter from "../pages/counter";
// import ProductDetails from "../pages/ProductDetails";
import ErrorPage from "../pages/ErrorPage";
import Contact from "../pages/Contact/Contact";
import LocalImage from "../components/LocalImage";
import ComponentA from "../pages/prop/ComponentA";
import { lazy, Suspense } from "react";
import Expensive from "../pages/prop/Expensive";

const ProductDetails = lazy(()=> import("../pages/ProductDetails"))

const Route = createBrowserRouter([{
  path: "/",
  element: <Applayout/>,
  children:[
    {path: "/",
      element: <HomePage />,
    },
    { path: "/comments",
      element: <Comments />},
    {path: "/expensive",
      element: <Expensive/>
    },
    {path: "/counter",
      element: <Counter />
    },
    {path: "/propsdrilling",
      element: <ComponentA />
    },
    {path: "/images",
      element: <LocalImage />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    // {
    //   path: "/productDetail/:productId",
    //   element: <ProductDetails />
    // },
    {
      path: "/productDetail/:productId",
      element: (
      <Suspense fallback={"Loading>>"} > <ProductDetails /> </Suspense>
       )
    },

  ],
  errorElement: <ErrorPage/>
},
]);

export default Route 