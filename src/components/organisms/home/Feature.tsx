import { AiFillDollarCircle } from "react-icons/ai";
import { GiShirt } from "react-icons/gi";
import { BiTrendingUp } from "react-icons/bi";

const Feature = () => {
  return (
    <div className="flex flex-col h-full md:h-screen justify-center items-center text-center">
      <div className="text-3xl font-extrabold ">
        Upgoods: Your One-Stop Shop for <br /> Online Fashion Shopping
      </div>
      <div>
        Shop for the best brands, clothes and accessories at upgoods. <br /> We have everything from streetwear to high end designer clothing.
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-10">
        <div className="flex flex-col w-full md:w-4/12 items-center">
          <div className="bg-sun rounded-full p-5 my-5">
            <AiFillDollarCircle size={50} />
          </div>
          <div className="text-xl font-extrabold">Affordable</div>
          <div className="text-sm">upgoods offers a wide range of fashion items at affordable prices. Whether you're looking for a new outfit for a night out or a complete wardrobe overhaul, upgoods has you covered.</div>
        </div>
        <div className="flex flex-col w-full md:w-4/12 items-center">
          <div className="bg-sun rounded-full p-5 my-5">
            <GiShirt size={50} />
          </div>
          <div className="text-xl font-extrabold">Fashionable</div>
          <div className="text-sm">upgoods offers a wide range of fashionable clothing at affordable prices. With upgoods, you can always find the perfect outfit for any occasion.</div>
        </div>
        <div className="flex flex-col w-full md:w-4/12 items-center">
          <div className="bg-sun rounded-full p-5 my-5">
            <BiTrendingUp size={50} />
          </div>
          <div className="text-xl font-extrabold">Trendy</div>
          <div className="text-sm">
            Our ecommerce website offers a wide selection of clothing, shoes and accessories from the hottest brands. Whether you're looking for a new outfit for a night out or just some everyday basics, upgoods has you covered
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
