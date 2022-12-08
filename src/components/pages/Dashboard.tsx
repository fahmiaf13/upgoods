import React from "react";
import { useSelector } from "react-redux";
import Template from "../templates/Template";
import { DashboardHeader } from "../organisms/dashboard";

const Dashboard = () => {
  const { data } = useSelector((state: any) => state.user);
  return (
    <Template title={data.displayName}>
      <section>
        <DashboardHeader data={data} />
      </section>
    </Template>
  );
};

export default Dashboard;
