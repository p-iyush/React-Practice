import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [childData, setChildData] = useState();

  const handleChildResponse = (data) => {
    setChildData(data);
  };

  return (
    <>
      <Child sendDataToPrent={handleChildResponse} />
      <h3>Parent Component</h3>
      <p>Data from child : {childData}</p>
    </>
  );
};

export default Parent;
