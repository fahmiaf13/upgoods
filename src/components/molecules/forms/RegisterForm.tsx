import React from "react";
import TextInput from "../../atoms/TextInput";

const RegisterForm = () => {
  return (
    <div className="w-1/4">
      <form action="" className="bg-slate-50 rounded-lg flex flex-col gap-2 p-7">
        <div className="font-extrabold text-3xl text-center text-sun">REGISTER</div>
        {/* <TextInput id="email" name="email" label="email" placeholder="email" type="email" /> */}
        {/* <TextInput id="password" name="password" label="password" placeholder="password" type="password" /> */}
        <button className="btn bg-sun w-full font-extrabold hover:border-none border-none">SUBMIT</button>
      </form>
    </div>
  );
};

export default RegisterForm;
