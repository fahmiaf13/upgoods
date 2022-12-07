import React, { useEffect, useState } from "react";
import Counter from "../../atoms/Counter";
import Bookmark from "../../atoms/Bookmark";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlices";
import { FaRegBookmark, FaBookmark, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
interface Props {
  products: product;
}
type product = {
  id: number;
  title: string;
  price: number;
  images: any;
  description: string;
};

const ProductCard = (props: Props) => {
  const dispatch = useDispatch();
  const [addBookmark, setAddBookMark] = useState(false);
  const [count, setCount] = useState(0);
  const { products } = props;

  const handleBookmark = () => {
    setAddBookMark((addBookmark) => !addBookmark);
  };

  useEffect(() => {
    if (addBookmark === true) {
      // console.log("success");
    } else {
      // console.log("delete bookmark");
    }
  }, [addBookmark]);

  return (
    <div className="card w-64 bg-base-100 shadow-xl">
      <button onClick={handleBookmark} className="absolute right-3 top-3 bg-whiter p-2 rounded-full">
        {addBookmark ? <FaBookmark className="text-tomato" size={20} /> : <FaRegBookmark size={20} />}
      </button>
      <figure>
        <img src={products.images[2]} alt={products.title} className="rounded-t-xl" />
      </figure>
      <div className="card-body">
        <Link className="card-title font-extrabold hover:text-sun duration-300" to={`product/${products.id}`}>
          {products.title}
        </Link>
        <p className="text-sm">{products.description}</p>
        <div className="card-actions">
          <div className="flex justify-between w-full">
            <p className="text-md font-extrabold">$ {products.price}</p>
            {/* <Counter
              onCountChange={(count: number) => {
                setCount(count);
              }}
            />
            <div>{count}</div> */}
          </div>
          <button className="btn bg-sun w-full font-extrabold border-sun flex items-center gap-3" onClick={() => dispatch(addToCart({ id: products.id, images: products.images[0], title: products.title, price: products.price }))}>
            <FaCartPlus size={20} /> ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
