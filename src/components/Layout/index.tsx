import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import classes from "./Layout.module.scss";
// TODO: Fix modules declaration

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className={classes.main}>
        {/* <main> */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
