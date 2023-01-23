import React, { useState } from "react";
import { Link, Route } from "wouter";

const Button = (props) => {
  return (
    <Link href={props.link}>
      <button
        className={`border-4 w-full h-12 mb-4 text-xl z-50 sm:text-2xl transition-colors hover:bg-gold ${
          props.color === "blue" ? "border-blue" : "border-red"
        }`}
      >
        {props.name}
      </button>
    </Link>
  );
};
export default Button;
