import React, { useState, useEffect } from "react";

const Sample = () => {
  const [text, setText] = useState("akash");

  console.log("Sample rendered");

  useEffect(() => {
    console.log("Text effect");
  }, [text]);

  setTimeout(() => {
    console.log("Timeout executing");
    setText("akas");
  }, 10 * 1000);

  return <h1 className="ui header">{text}</h1>;
};

export default Sample;
