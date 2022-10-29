import React from "react";

function Card( {title, body, button} ) {
  return (
    
      <div className="card">
        <div className="info">
          <p>{title}</p>
          <p>{body}</p>
          <p>{button}</p>
        </div>
      </div>
     
  );
}

export default Card;
