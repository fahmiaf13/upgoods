import React from "react";
import AboutImgFirst from "../../../assets/img/about-us-1.jpg";
import AboutImgScnd from "../../../assets/img/about-us-2.jpg";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row h-full md:h-screen">
      <div className="w-full h-screen md:w-1/2 py-10">
        <div className="h-full w-full relative flex justify-between">
          <img src={AboutImgFirst} alt="" className=" absolute w-80 md:w-60 lg:w-72 top-10 left-10 rounded-[30px]" />
          <img src={AboutImgScnd} alt="" className=" absolute w-80 md:w-60 lg:w-72 bottom-10 right-10 rounded-[30px]" />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex flex-col h-full justify-center">
          <div className="text-sun font-extrabold text-xl">ABOUT US</div>
          <div className="font-extrabold text-4xl">Buy The Latest Styles From Your Favorite Stores</div>
          <div className="font-light">
            Looking for the latest fashion trends? You've come to the right place! Upgoods is your one-stop shop for all things fashion. We've got everything you need, from clothes and accessories to beauty products and more.We know that
            staying up-to-date with the latest trends can be tough, but we make it easy with our constantly updated inventory. Plus, our friendly and knowledgeable staff is always here to help you find exactly what you're looking for.So
            what are you waiting for? Come on over to Upgoods and start shopping!
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
