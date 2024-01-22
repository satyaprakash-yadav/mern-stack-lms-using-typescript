"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Heading from "../utils/Heading";
import Policy from "./Policy";
import Footer from "../components/Footer";

type Props = {};

const page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(3);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="Policy - Elearning"
        description="Elearning is a learning management system for helping programmers."
        keywords="Programming, MERN, AI, Graphic Design, Digital Marketing"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Policy />
      <Footer />
    </div>
  );
};

export default page;
