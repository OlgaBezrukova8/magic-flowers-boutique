import React, { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import classes from "./Layout.module.scss";

const Layout: FunctionComponent = () => {
  return (
    <>
      <main className={classes.Layout__main}>
        <Header />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
