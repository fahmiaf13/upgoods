import React from "react";
import { useSelector } from "react-redux";
import Template from "../templates/Template";

const Dashboard = () => {
  const { data } = useSelector((state: any) => state.user);
  return (
    <Template title={data.displayName}>
      <div>Hello {data.displayName}</div>
    </Template>
  );
};

export default Dashboard;
