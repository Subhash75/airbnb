import React from "react";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

function Card({ img, rate1, rate2, country, title, amount }) {
  return (
    <>
      <div className="card2">
        <div className="img">
          <img src={img} alt="img" />
          <span>
            <AiOutlineHeart />
          </span>
        </div>
        <p>
          <span>
            <AiFillStar />
          </span>
          <span>{rate1}</span>
          <span>({rate2})</span>
          <span>•</span>
          <span>{country}</span>
        </p>
        <p>{title}</p>
        <p>
          From {amount}
          <span>/person</span>
        </p>
      </div>
    </>
  );
}

export default Card;
