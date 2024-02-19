import React, { FunctionComponent } from "react";

interface ImageProps {
  source: string;
  alt: string;
  width?: number;
  className?: string;
}

const Image: FunctionComponent<ImageProps> = ({
  source,
  alt,
  width,
  className,
}) => {
  const imageClasses = className || "";

  return <img src={source} alt={alt} width={width} className={imageClasses} />;
};

export default Image;
