import React, { useState } from "react";
import { Link, Route } from "wouter";

const Button = (props) => {
  return (
    <Link href={props.link}>
      <button
        className={`border-4 ${
          props.color === "blue" ? "border-blue" : "border-red"
        }`}
      >
        {props.name}
      </button>
    </Link>
  );
};
export default Button;
