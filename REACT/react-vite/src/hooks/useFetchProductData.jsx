import { useEffect, useState } from "react";

const useFetchProductData = () => {
  const [productsdata, setProductsdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const featchData = async () => {
    try {
      setIsLoading(true);

      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProductsdata(data.products);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Internal server error:", error);
    }
  };

  useEffect(() => {
    console.log("API called");
    featchData();
  }, []);

  return { productsdata, isLoading };
};

export default useFetchProductData;