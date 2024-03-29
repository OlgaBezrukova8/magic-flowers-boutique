import React, { FunctionComponent } from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader: FunctionComponent = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
