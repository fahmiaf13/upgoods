import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <>
      <div className="w-screen box-content z-[100] bg-darker-100/50 fixed left-0 top-0 h-full">
        <div className="fixed flex justify-center w-full items-center h-full">
          <ReactLoading type="bars" color="#F8B500" height={300} width={100} />
        </div>
      </div>
    </>
  );
};

export default Loading;
