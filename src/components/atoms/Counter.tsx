import { useState } from "react";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../../redux/slices/cartSlices";

interface Props {
  onCountChange: (count: number) => void;
  counterId: number;
  quantity: number;
}

const Counter = (props: Props) => {
  const { onCountChange, counterId, quantity } = props;
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    const result = event.target.value.replace(/\D/g, "");
    onCountChange(result);
  };

  return (
    <div className="flex text-sm items-center">
      <button onClick={() => dispatch(decrementQuantity(counterId))} className="bg-darker-100/10 px-2 hover:bg-sun duration-300 rounded-l-md">
        -
      </button>
      <input type="text" value={quantity} onChange={handleChange} className="w-8 text-center bg-darker-200/20" />
      <button onClick={() => dispatch(incrementQuantity(counterId))} className="bg-darker-100/10 px-2 hover:bg-sun duration-300 rounded-r-md">
        +
      </button>
    </div>
  );
};

export default Counter;
