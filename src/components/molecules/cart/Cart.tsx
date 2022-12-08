import React, { useState } from "react";
// icons
import { BiShoppingBag } from "react-icons/bi";
import { useSelector } from "react-redux";
import { MdSportsKabaddi } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../redux/slices/cartSlices";
import { IoCloseCircleSharp } from "react-icons/io5";
// components
import Counter from "../../atoms/Counter";

const Cart = () => {
  const [count, setCount] = useState(1);
  const { cart } = useSelector<any, any>((state) => state.cart);
  const dispatch = useDispatch();

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item: any) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  const showItems = cart?.map((item: any) => {
    return (
      <div key={item.id} className="flex gap-2 p-3 rounded-md bg-whiter shadow-lg text-sm relative">
        <button onClick={() => dispatch(removeItem(item.id))} className="absolute right-3">
          <IoCloseCircleSharp size={20} />
        </button>
        <img src={item.images} alt="" className="w-3/12 rounded-md" />
        <div className="w-9/12">
          <div className="font-extrabold text-md">{item.title}</div>
          <div className="text-darker-100">Subtotal: ${item.price}</div>
          <Counter
            quantity={item.quantity}
            counterId={item.id}
            onCountChange={(count: number) => {
              setCount(count);
            }}
          />
        </div>
      </div>
    );
  });

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <BiShoppingBag size={24} />
          <span className="badge badge-sm bg-tomato indicator-item border-2 border-whiter py-2">{cart?.length}</span>
        </div>
      </label>
      <div tabIndex={0} className="p-5 card card-compact visible dropdown-content w-96 bg-base-100 shadow">
        <div className="flex flex-col gap-3 max-h-[400px] overflow-scroll">
          {cart.length ? (
            showItems
          ) : (
            <div className="opacity-40 flex flex-col items-center">
              <MdSportsKabaddi size={64} />
              <div>Your Cart Is Empty</div>
            </div>
          )}
        </div>
        <div className="pt-3">
          <div className="text-md">
            Total: <span className="font-extrabold">${getTotal().totalPrice}</span>{" "}
          </div>
          <button className="btn bg-sun btn-block border-none font-extrabold">CHECK OUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
