import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
const TRACKING_ID = "G-WNFKTSE62G";

ReactGA.initialize(TRACKING_ID);

import Picture from "./components/Picture";
import Content from "./components/Content";
import About from "./components/About";
import Songbook from "./components/Songbook";
import Song from "./components/Song";
import { Link, Route, Router, Switch, useLocation, useRoute } from "wouter";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import songs from "./assets/songs";

import "./App.css";

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const songsComponents = songs.map((e, i) => {

    return (
      <Route
        key={(e.title + " comp").toLowerCase().replace(/ /g, "-")}
        path={encodeURI("/Koledowanie/" + e["title"].toLowerCase().replace(/ /g, "-"))}
      >
        <Song title={e.title} text={e.text} />
      </Route>
    );
  });

  return (
    <>
      <div className="w-full flex flex-col max-lg:gap-4 lg:grid grid-cols-2 h-screen box-border relative overflow-x-hidden">
        <div className=" flex justify-center items-center px-16 py-8 2xl:px-32 xl:px-24 lg:px-20 md:px-56 sm:px-32 ">
          <Picture />
        </div>
        <div className="w-full lg:h-full lg:overflow-hidden relative p-2 sm:p-4 md:p-6">
          <div className="border bg-bige relative w-full h-full p-8 md:p-10">
            <img
              src="decor1.png"
              className="absolute w-28 top-0 left-0  transform -translate-x-1/3 -translate-y-1/3 rotate-45"
            />
            <img
              src="decor2.png"
              className="absolute w-28 bottom-0 right-0  transform translate-x-1/3 translate-y-1/3  rotate-45"
            />
            <div className="w-full h-full flex flex-col lg:overflow-y-auto">
              <Switch>
                <Route path="/koledowanie/" component={Content} />
                <Route path="/koledowanie/o-nas" component={About} />
                <Route path="/koledowanie/spiewnik" component={Songbook} />
                {songsComponents}
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
