import React, { useState } from "react";
import Accordian from "./Accordian";
import Search from "./Search";
import Dropdown from "./Dropdown";

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

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

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
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};

export default App;
