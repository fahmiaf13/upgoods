import React from "react";
import HeroImg from "../../../assets/img/hero-img.png";
import HeroImgScnd from "../../../assets/img/hero-img-2.png";
import { Carousel } from "../../molecules/carousel";

const LandingPage = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row h-full md:h-screen justify-between items-center w-full">
      <div className="w-full md:w-6/12">
        <div className="text-3xl md:text-5xl lg:text-7xl font-extrabold">
          The best clothes
          <span className="text-sun"> for you</span>
        </div>
        <div className="text-sm my-5 font-light">
          upgoods is the perfect place to shop for trendy and stylish clothes for teenagers. With a huge range of clothes, shoes and accessories to choose from, upgoods has something for everyone. And with great prices and free shipping on
          orders over $50, there's no reason not to start shopping today!
        </div>
        <button className="btn bg-sun border-sun font-extrabold">EXPLORE NOW</button>
      </div>
      <div className="flex md:w-4/12 pt-[5rem] h-full w-full justify-center items-end">
        <div className="w-1/3 md:w-full md:h-5/6 flex justify-center">
          <img src={HeroImg} alt="" className="h-full" />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
