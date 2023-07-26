import React from "react";
import { LayoutProps } from "../../types";

const Section: React.FC<LayoutProps> = ({ children, className }) => {
  const sectionClasses = className || "";

  return <section className={sectionClasses}>{children}</section>;
};

export default Section;
