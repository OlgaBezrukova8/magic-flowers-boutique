import React, { FunctionComponent } from "react";
import { LayoutProps } from "../../Layout/Layout.types";

const Section: FunctionComponent<LayoutProps> = ({
  children,
  className,
  id,
}) => {
  const sectionClasses = className || "";
  const sectionId = id || "";

  return (
    <section className={sectionClasses} id={sectionId}>
      {children}
    </section>
  );
};

export default Section;
