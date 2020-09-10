import React from "react";

const SearchBar = ({ placeHolder, setTerm, inputState, term }) => {
  return (
    <div className={`ui ${inputState} search`}>
      <div className="ui icon input">
        <input
          className="prompt"
          type="text"
          placeholder={placeHolder}
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          style={{ borderRadius: "20px" }}
        />
        <i className="search icon"></i>
      </div>
    </div>
  );
};

export default SearchBar;
