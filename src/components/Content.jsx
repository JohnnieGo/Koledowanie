import React, { useState } from "react";
import Button from "./Button";

const Content = () => {
  return (
    <div>
      <div className="flex flex-col content-between h-full">
        <div className="flex flex-col gap-5 h-full">
          <h1 className="text-blue 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl ">
            Kolędowanie w Gołębniku
          </h1>
          <h3 className="text-red 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl ">
            już za: 20 dni, 5 godzin, 32 minuty
          </h3>
          <h5 className="text-gold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base ">
            Gołębia 20, [data], sala studencka
          </h5>
        </div>
        <div className="justify-self-end mt-8">
          <Button name="Więcej o kolędowaniu" color="red" link="/o-nas" />
          <Button name="Zobacz śpiewnik" color="blue" link="spiewnik" />
        </div>
      </div>
    </div>
  );
};
export default Content;

// 2xl: xl: lg: md: sm:
