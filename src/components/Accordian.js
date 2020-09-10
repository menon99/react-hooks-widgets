import React, { useState } from "react";

const Accordian = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onClick = (index) => {
    const active = index === activeIndex ? null : index;
    setActiveIndex(active);
  };

  const accordianItems = items.map(({ title, content }, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <div key={title} onClick={() => onClick(index)}>
        <div className={`title ${active}`} style={{ fontSize: "20px" }}>
          <i className="dropdown icon"></i>
          {title}
        </div>
        <div className={`content ${active}`}>
          <p
            className="transition visible"
            style={{
              fontSize: "17px",
              color: "crimson",
              marginLeft: "10px",
              display: "block !important",
            }}
          >
            {content}
          </p>
        </div>
      </div>
    );
  });
  return <div className="ui styled fluid accordion">{accordianItems}</div>;
};

export default Accordian;
