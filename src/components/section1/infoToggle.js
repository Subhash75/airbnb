import React from "react";

function InfoToggle() {
  return (
    <div className="nav">
      <div className="visited">
        <p>Dates</p>
        <p>Group size</p>
        <p>More filters</p>
      </div>
      <div className="unvisited">
        <p>Great for groups</p>
        <p>Family-friendly</p>
        <p>Animals</p>
        <p>Arts & writing</p>
        <p>Baking</p>
        <p>Cooking</p>
        <p>Dance</p>
        <p>Drinks</p>
        <p>Entertainment</p>
        <p className="button"> > </p>
      </div>
    </div>
  );
}

export default InfoToggle;
