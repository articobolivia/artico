import React from "react";
import Banner from "./Banner";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="bg-blue-500 border-b-2 border-cyan-500">
      <Banner />
        <Nav /> 
    </div>
  );
};

export default Header;
