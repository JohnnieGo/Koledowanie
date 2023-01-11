import React from "react";
import { Link, Route } from "wouter";

function About() {
  return (
    <div className="h-full lg:overflow-y-auto">
      <div className="flex pb-2 sm:pb-4 md:pb-6 content-center flex-wrap gap-2 w-full ">
        <Link href="/">
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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
        felis justo. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Praesent volutpat turpis et arcu semper,
        a molestie ligula viverra. Pellentesque non erat dolor. Integer rhoncus
        sit amet mauris vel pharetra. Vivamus in dolor malesuada, vestibulum
        mauris ac, pretium erat. Suspendisse hendrerit ornare turpis, vel
        pretium risus.
        <br />
        Vestibulum ante justo, sodales in maximus eu, fringilla imperdiet eros.
        Duis molestie condimentum neque in rutrum. Proin interdum, neque sed
        dignissim condimentum, risus odio scelerisque magna, id varius erat
        nulla in dui. Fusce a justo ex. Etiam sed bibendum velit. Etiam dictum
        est at ipsum pellentesque, nec elementum lectus ultricies. Mauris sed
        massa malesuada, blandit nunc vel, suscipit nisi. Nulla maximus purus a
        metus lobortis, quis vestibulum dolor pulvinar. In euismod congue nisi
        at laoreet. Vestibulum ante justo, sodales in maximus eu, fringilla
        imperdiet eros. Duis molestie condimentum neque in rutrum. Proin
        interdum, neque sed dignissim condimentum, risus odio scelerisque magna,
        id varius erat nulla in dui. Fusce a justo ex. Etiam sed bibendum velit.
        Etiam dictum est at ipsum pellentesque, nec elementum lectus ultricies.
        Mauris sed massa malesuada, blandit nunc vel, suscipit nisi. Nulla
        maximus purus a metus lobortis, quis vestibulum dolor pulvinar. In
        euismod congue nisi at laoreet. assadsadsad
      </p>
    </div>
  );
}

export default About;

// rfce
