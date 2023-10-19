import React, { useEffect, useState } from "react";

const Child = ({ sendDataToPrent }) => {
  const [data, setData] = useState();

  useEffect(() => {
    sendDataToPrent(data);
  }, [data]);
  return (
    <>
      Child Component : { }
      <input
        type="text"
        placeholder="Enter data for parent"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </>
  );
};

export default Child;
