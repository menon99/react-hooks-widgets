import React, { useState, useEffect } from "react";
import axios from "axios";

const WIKIPEDIA_API = "https://en.wikipedia.org/w/api.php";

const Button = () => {
  const [count, setCount] = useState(0);
  const [someVar, setSomeVar] = useState(0);
  const [someObj, setSomeObj] = useState({});

  console.log("button rendered");

  const play = async () => {
    setSomeVar(someVar);

    setSomeVar(someVar - 10);
    setSomeVar(someVar + 20);
    setSomeVar(someVar + 10);
    const result = await axios.get(WIKIPEDIA_API, {
      params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: "akash",
      },
    });
    setSomeObj(result.data.query.search);
    setSomeObj(result.data.query.search);
  };

  useEffect(() => {
    console.log("count set");
    play();
  }, [count]);

  useEffect(() => {
    console.log(`someVar is ${someVar}`);
  }, [someVar]);

  useEffect(() => {
    console.log("someObj set");
  }, [someObj]);

  return (
    <div>
      <h1>{`clicked ${count} times`}</h1>
      <h1>{`someVar is ${someVar}`}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount(count + 2);
          setCount(count + 3);
          setCount(count + 1);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default Button;
