import React from "react";
import { LayoutProps } from "../../types";

const Section: React.FC<LayoutProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default Section;
