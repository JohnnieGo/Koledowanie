import React, { useEffect, useRef } from "react";
import { useLocation } from "wouter";

const Picture = () => {
  const location = useLocation();

  const count = useRef(1);

  useEffect(() => {
    count.current =
      count.current <= 5 ? count.current + 1 : (count.current = 1);
  }, [useLocation()]);

  console.log(count.current);

  return (
    <>
      <img
        src={"picture" + count.current + ".png"}
        className=" "
        loading="lazy"
      />
    </>
  );
};
export default Picture;
