import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="fixed z-[100] flex justify-center items-center bg-darker-100/20 h-full w-full">
      <ReactLoading type="bars" color="#F8B500" height={400} width={200} />
    </div>
  );
};

export default Loading;
