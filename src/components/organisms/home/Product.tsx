import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "../../molecules/cards";

const Product = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=12");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const showCard = products.map((item: any) => {
    return <ProductCard key={item.id} products={item} />;
  });

  return (
    <div>
      <div className="">
        <div className="font-extrabold text-xl text-center mt-10 text-sun">OUR PRODUCT</div>
        <div className="tabs w-full flex justify-center my-5">
          <a className="tab tab-bordered">Shoes</a>
          <a className="tab tab-bordered tab-active">Shirt</a>
          <a className="tab tab-bordered">Jeans</a>
        </div>

        <div className="flex flex-wrap justify-center gap-7 w-full">{showCard}</div>
      </div>
    </div>
  );
};

export default Product;
