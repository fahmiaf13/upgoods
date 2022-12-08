import React, { useEffect, useState } from "react";
import DashboardImgOne from "../../../assets/img/dashboard-1.svg";

interface Props {
  data: Data;
}

type Data = {
  displayName: string;
  photoURL: string;
};

const DashboardHeader = (props: Props) => {
  const [greet, setGreet] = useState("");
  const { data } = props;
  console.log(data);

  const myDate = new Date();
  const hours = myDate.getHours();
  useEffect(() => {
    if (hours < 12) {
      setGreet("Good Morning 🌤	");
    } else if (hours >= 12 && hours <= 17) {
      setGreet("Good Afternoon 🌤");
    } else if (hours >= 18 && hours <= 24) {
      setGreet("Good Evening 🌙");
    }
  }, []);

  return (
    <div className="flex">
      <div className="w-8/12 flex bg-sun rounded-2xl p-5">
        <div className="flex w-full flex-col">
          <div className="text-xl">{greet}</div>
          <div className="font-extrabold text-2xl">{data.displayName}</div>
          <div className="font-extrabold text-whiter text-4xl pt-6">Wanna buy something today ?</div>
        </div>
        <div className="flex justify-end w-full">
          <img src={DashboardImgOne} alt="" />
        </div>
      </div>
      <div className="w-4/12"></div>
    </div>
  );
};

export default DashboardHeader;
