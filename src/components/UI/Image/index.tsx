import React from "react";

interface ImageProps {
  source: string;
  alt: string;
  width?: number;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ source, alt, width, className }) => {
  const imageClasses = className || "";

  return <img src={source} alt={alt} width={width} className={imageClasses} />;
};

export default Image;
