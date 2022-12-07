import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../organisms/product/productDetail/Header";
import Template from "../../templates/Template";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();

  const [products, setProducts] = useState<any>([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);

  return (
    <Template title={products.title}>
      <Header products={products} />
    </Template>
  );
};

export default ProductDetails;
