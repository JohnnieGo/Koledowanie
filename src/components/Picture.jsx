import React, { useState, useEffect, useRef } from "react";
import { Link, Route, Router, Switch, useLocation, useRoute } from "wouter";


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
      src={"obrazek" + count.current + ".png"}
      className=" " loading="lazy"/>
  </>
  );
};
export default Picture;
