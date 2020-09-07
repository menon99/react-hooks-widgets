import React from "react";
import Accordian from "./Accordian";
import Search from "./Search";

const items = [
  {
    title: "My name",
    content: "M Akash Menon",
  },
  {
    title: "My age",
    content: "I am 21 years old",
  },
  {
    title: "My occupation",
    content: "Software developer",
  },
];

const App = () => {
  return (
    <div className="ui grid container" style={{ margin: "10px" }}>
      <div className="row centered">
        <h1
          className="ui header"
          style={{
            alignContent: "center",
            textAlign: "center",
            color: "blueviolet",
            margin: "10px",
          }}
        >
          Hello World!
        </h1>
      </div>
      <div className="row">
        <Accordian items={items} />
      </div>
      <Search />
    </div>
  );
};

export default App;
