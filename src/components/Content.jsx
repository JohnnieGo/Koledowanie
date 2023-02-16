import React from "react";
import Button from "./Button";
import CoundownCounter from "./CountdownCounter";

const Content = () => {
  return (
    <div>
      <div className="flex flex-col content-between h-full">
        <div className="flex flex-col gap-5 h-full">
          <h1 className="text-blue text-4xl 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl ">
            Kolędowanie w Gołębniku
          </h1>
          <div className="text-red text-2xl 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl ">
            <CoundownCounter />
          </div>
          <div className="text-gold inline-block text-xl align-middle 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base">
            <span>
              23 stycznia 2023, godzina 18.30, ul. Gołębia 20, Strefa studencka
              (sala 15, I piętro)&nbsp;
              <a
                className="inline-block h-7"
                href="https://goo.gl/maps/F21Y5ArwDzvvs1aGA"
                target="_blank"
              >
                <img src="location.svg" className="fill-gold h-8"></img>
              </a>
            </span>
          </div>
        </div>
        <div className="justify-self-end mt-8 pb-10">
          <Button name="Więcej o kolędowaniu" color="red" link="/Koledowanie/o-nas" />
          <Button name="Zobacz śpiewnik" color="blue" link="/Koledowanie/spiewnik" />
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="font-serif">
            Wydarzenie organizowane jest przez Koło Naukowe Historyków Języka UJ
            oraz Wydziałową Radę Samorządu Studentów Wydziału Polonistyki UJ.
          </span>
          <div className="flex justify-center items-center ">
            <a
              href="https://pl-pl.facebook.com/Samorzad.Polonistyki/"
              target="_blank"
            >
              <img
                src="logo-wssp.png"
                alt=""
                className="h-24 transition-transform hover:scale-75"
              />
            </a>
            <a
              href="https://www.facebook.com/people/Ko%C5%82o-Naukowe-Historyk%C3%B3w-J%C4%99zyka-UJ/100032092462479/"
              target="_blank"
            >
              <img
                src="logo-knhj.png"
                alt=""
                className="h-16 transition-transform hover:scale-75"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;