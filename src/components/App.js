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

const colorOptions = [
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
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

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
        selected={selectedColor}
        onSelectedChange={setSelectedColor}
        options={colorOptions}
        placeHolder="Select a color"
      />
      <h3 className="ui header" style={{ color: `${selectedColor.value}` }}>
        Hello world
      </h3>
    </div>
  );
};

export default App;
