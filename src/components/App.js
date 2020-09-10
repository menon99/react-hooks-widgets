import React, { useState } from "react";
import Accordian from "./Accordian";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Header from "./Header";
import Route from "./Route";

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
  console.log(window.location.pathname);

  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordian items={items} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/wikipedia">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          selected={selectedColor}
          onSelectedChange={setSelectedColor}
          options={colorOptions}
          placeHolder="Select a color"
        />
        <h3 className="ui header" style={{ color: `${selectedColor.value}` }}>
          Hello world
        </h3>
      </Route>
    </div>
  );
};

export default App;
