import React from "react";
import { Link, Route } from "wouter";

import songs from "../assets/songs";

const songList = songs.map((e, i) => {
  return (
    <Link
      key={(e.title + " listEl").toLowerCase().replace(/ /g, "-")}
      href={encodeURI("/" + e["title"].toLowerCase().replace(/ /g, "-"))}
    >
      <p className="cursor-pointer inline-block w-max hover:text-gold active:text-gold sm: pb-1 tex sm:text-xl md:text-2xl">
        {i + 1 + ". " + e["title"]}
      </p>
    </Link>
  );
});

console.log(songList);

function Songbook() {
  return (
    <>
      <div className="flex pb-2 sm:pb-4 md:pb-6 content-center flex-wrap gap-2 w-full z-10">
        <Link href="/">
          <div className="flex items-center">
            <svg
              className="fill-red hover:fill-gold cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
            >
              <path d="M24 40.15 7.85 24 24 7.85l2.4 2.4L14.35 22.3h25.8v3.4h-25.8L26.4 37.75Z" />
            </svg>
          </div>
        </Link>
        <h1 className="text-blue text-3xl 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-6xl sm:text-5xl">
          Śpiewnik
        </h1>
      </div>
      <div className="w-full h-full flex flex-col">{songList}</div>
    </>
  );
}

export default Songbook;

// rfce
