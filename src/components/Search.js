import React, { useState, useEffect } from "react";
import axios from "axios";
import unescape from "unescape";

const WIKIPEDIA_API = "https://en.wikipedia.org/w/api.php";
const CATEGORY = "category",
  LOADING = "loading",
  EMPTY = "";

const extract = (sentence) => {
  if (sentence.length === 0) return "";
  let cleaned = "",
    i = 0;
  for (; i < sentence.length; i++) {
    if (sentence.substr(i, 5) === "<span") {
      i += 5;
      let countClose = 0,
        countOpen = 0;
      while (countClose !== 2) {
        if (sentence[i] === ">") countClose++;
        else if (sentence[i] === "<") countOpen++;
        else if (countClose === 1 && !countOpen) cleaned += sentence[i];
        i++;
      }
      break;
    }
    cleaned += sentence[i];
  }
  cleaned += extract(sentence.slice(i, sentence.length));
  return unescape(cleaned, "all");
};

const Search = () => {
  const [term, setTerm] = useState(EMPTY);
  const [previousSearchTerm, setPreviousSearchTerm] = useState(EMPTY);
  const [inputState, setInputState] = useState(CATEGORY);
  const [searchItems, setSearchItems] = useState([]);

  useEffect(() => {
    const search = async () => {
      setInputState(LOADING);
      const result = await axios.get(WIKIPEDIA_API, {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: previousSearchTerm,
        },
      });
      setSearchItems(result.data.query.search);
      setInputState(CATEGORY);
    };
    if (previousSearchTerm.length !== 0) search();
  }, [previousSearchTerm]);

  useEffect(() => {
    let timerID = null;
    if (term.length) {
      timerID = setTimeout(
        () => setPreviousSearchTerm(term.toLowerCase()),
        1000
      );
    } else timerID = setTimeout(() => setSearchItems([]), 1000);
    return () => clearTimeout(timerID);
  }, [term]);

  const resultContent = searchItems.map(({ pageid, title, snippet }) => {
    return (
      <div className="item" key={pageid}>
        <i className="map marker icon"></i>
        <div className="content">
          <div className="right floated content">
            <a
              className="medium violet ui button"
              href={`https://en.wikipedia.org?curid=${pageid}`}
              target="blank"
            >
              Go
            </a>
          </div>
          <h3 className="ui header">{title}</h3>
          <div className="description" style={{ fontSize: "13px" }}>
            {extract(snippet)}
          </div>
        </div>
      </div>
    );
  });

  const content = (
    <React.Fragment>
      <div className="row centered">
        <div className={`ui ${inputState} search`}>
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              placeholder="Search Wikipedia..."
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              style={{ borderRadius: "20px" }}
            />
            <i className="search icon"></i>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="ui celled list">{resultContent}</div>
      </div>
    </React.Fragment>
  );
  return content;
};

export default Search;
