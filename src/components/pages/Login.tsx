import React from "react";
import Loading from "../atoms/Loading";
import Toast from "../atoms/Toast";
import { LoginForm } from "../molecules/forms";
import Template from "../templates/Template";

const Login = () => {
  return (
    <Template title="Login">
      <div className="flex h-screen w-full justify-center items-center">
        <Toast />
        <LoginForm />
      </div>
    </Template>
  );
};

export default Login;
