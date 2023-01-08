import Picture from "./components/Picture";
import Content from "./components/Content";
import About from "./components/About";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
import { Link, Route, Switch } from "wouter";
import "./App.css";

function App() {
  return (
    <div className="w-full flex flex-col max-lg:gap-4 lg:grid grid-cols-2 h-screen box-border ">
      <div className=" flex justify-center items-center px-16 2xl:px-32 xl:px-24 lg:px-32 md:px-56 sm:px-32 ">
        <Picture />
      </div>
      <div className="w-full h-full p-10">
        <div className="border bg-bige w-full h-full p-10 overflow-auto">
          <Switch>
            <Route path="/witajcie">
              <Content />
            </Route>
            <Route path="/o-nas">
                <About />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
export default App;
