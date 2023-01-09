import React, { useEffect, useState } from "react";

import Picture from "./components/Picture";
import Content from "./components/Content";
import About from "./components/About";
import { Link, Route, Router, Switch, useLocation, useRoute  } from "wouter";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./App.css";

function App() {
  const nodeRef = React.useRef(null);
  const location = useLocation();
  const [match, params] = useRoute("/koledowanie/o-nas");


  return (
    <Router base="/koledowanie">
      <div className="w-full flex flex-col max-lg:gap-4 lg:grid grid-cols-2 h-screen box-border ">
        <div className=" flex justify-center items-center px-16 2xl:px-32 xl:px-24 lg:px-32 md:px-56 sm:px-32 ">
          <Picture />
        </div>
        <div className="w-full h-full p-10">
          <div className="border bg-bige w-full h-full p-10 overflow-hidden">
                <Switch>
                  <Route path="/" component={Content} />
                  <Route path="/o-nas" component={About} />
                </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
