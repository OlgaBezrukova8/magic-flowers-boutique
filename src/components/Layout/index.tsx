import React from "react";
import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import classes from "./Layout.module.scss";

const Layout: FunctionComponent = () => {
  return (
    <>
      <Header />
      <main className={classes.Layout__main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
