import React from "react";
import { Link, Route } from "wouter";

function About() {
  return (
    <div className="h-full lg:overflow-y-auto">
      <div className="flex pb-2 sm:pb-4 md:pb-6 content-center flex-wrap gap-2 w-full ">
        <Link href="/Koledowanie/">
          <div className="flex items-center">
            <svg
              className="fill-red hover:fill-gold cursor-pointer z-10"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
            >
              <path d="M24 40.15 7.85 24 24 7.85l2.4 2.4L14.35 22.3h25.8v3.4h-25.8L26.4 37.75Z" />
            </svg>
          </div>
        </Link>
        <h1 className="text-blue text-3xl 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-6xl sm:text-5xl">
          O kolędowaniu
        </h1>
      </div>
      <div className="font-serif text-xl flex flex-col gap-4">
        <p>
          Po raz kolejny zapraszamy na nasze tradycyjne Kolędowanie w Gołębniku.
          Tegoroczny wieczór kolęd uświetni zespół{" "}
          <a
            className="text-blue hover:text-gold"
            href="https://www.facebook.com/profile.php?id=100071649979747"
            target="_blank"
          >
            „Bel Trio”
          </a>{" "}
          (zapraszamy do wysłuchania ich przepięknego{" "}
          <a
            className="text-blue hover:text-gold"
            href="https://fb.watch/h-Fyl5qjld"
            target="_blank"
          >
            wykonania Kołysanki Józefa
          </a>
          ). Nim zaczniemy wspólnie muzykować, zapoznamy się z krótką historią
          kolędowania oraz prezentacją dotyczącą kolędy ludowej, nie zabraknie
          także poczęstunku.
        </p>
        <p>
          Miejscem kolędowania będzie{" "}
          <b className="text-red">strefa studencka Wydziału Polonistyki UJ</b>{" "}
          (ul. Gołębia 20, sala 15, piętro I), spotkamy się tam{" "}
          <b className="text-red">23 stycznia o godzinie 18.30</b>.
        </p>
        <p>Do zobaczenia!</p>
      </div>
    </div>
  );
}

export default About;

// rfce
