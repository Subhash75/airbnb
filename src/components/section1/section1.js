import React from "react";
import Card from "./card";
import InfoToggle from "./infoToggle";

function Section1() {
  return (
    <div className="first-section">
      <h1 className="card-heading">New this week</h1>
      <div className="card-container">
        <Card title='Collection' body="Most popular around the world" button="Show all" />
        <Card title='Collection' body="Great for team building" button="Show all" />
        <Card title='Collection' body="Fun for the family" button="Show all"/>
      </div>
      <InfoToggle />
    </div>
  );
}

export default Section1;
