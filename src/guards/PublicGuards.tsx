import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PublicGuards = () => {
  const { data } = useSelector((state: any) => state?.user);
  const token = data?.stsTokenManager?.accessToken;
  return token ? <Navigate replace to="/" /> : <Outlet />;
};

export default PublicGuards;
