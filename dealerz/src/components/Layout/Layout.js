import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Routers from "../../Routes/Routers";
const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />  
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;
