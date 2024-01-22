"use client";
import React from "react";
import Heading from "../../../app/utils/Heading";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import DashboardHeader from "../../../app/components/Admin/DashboardHeader";
import OrdersAnalytics from "../../components/Admin/Analytics/OrdersAnalytics";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Heading
        title="ELearning - Admin"
        description="Elearning is a platform for students to learn and get help from teachers"
        keywords="Programming, MERN, AI, Graphic Design, Digital Marketing"
      />
      <div className="flex h-[200vh]">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <OrdersAnalytics />
        </div>
      </div>
    </div>
  );
};

export default page;
