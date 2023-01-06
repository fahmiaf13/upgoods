import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedGuards = () => {
  const { data } = useSelector((state: any) => state?.user);
  const token = data?.stsTokenManager?.accessToken;

  return token ? <Outlet /> : <Navigate replace to="/login" />;
};

export default ProtectedGuards;
