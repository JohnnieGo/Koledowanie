import React from "react";
import { Link } from "wouter";

function Song(props) {
  return (
    <>
      <div className="flex flex-row pb-4 sm:pb-4 md:pb-6 content-center flex-wrap gap-2 w-full ">
        <Link href="/spiewnik">
          <div className="flex items-center">
            <svg
              className="fill-red hover:fill-gold cursor-pointer z-10 flex items-center"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
            >
              <path d="M24 40.15 7.85 24 24 7.85l2.4 2.4L14.35 22.3h25.8v3.4h-25.8L26.4 37.75Z" />
            </svg>
          </div>
        </Link>
        <h1 className="text-gold text-2xl  2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl">
          {props.title}
        </h1>
      </div>
      <p className="whitespace-pre-wrap text-l sm:text-xl font-serif">
        {props.text}
      </p>
    </>
  );
}

export default Song;
