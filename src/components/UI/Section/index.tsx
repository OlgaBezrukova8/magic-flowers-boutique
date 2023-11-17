import React, { FunctionComponent } from "react";
import { LayoutProps } from "../../Layout/Layout.types";

const Section: FunctionComponent<LayoutProps> = ({ children, className }) => {
  const sectionClasses = className || "";

  return <section className={sectionClasses}>{children}</section>;
};

export default Section;
