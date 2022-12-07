import React from "react";
import { RegisterForm } from "../molecules/forms";
import Template from "../templates/Template";

const Register = () => {
  return (
    <Template title="Register">
      <div className="flex h-screen w-full justify-center items-center">
        <RegisterForm />
      </div>
    </Template>
  );
};

export default Register;
