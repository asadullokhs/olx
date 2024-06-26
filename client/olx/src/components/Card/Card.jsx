import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ prod }) => {
  const createdAt = new Date(prod?.createdAt);
  const today = new Date();

  const fromattedDate = createdAt.toLocaleDateString();
  const todayDateString = today.toLocaleDateString();

  const isToday = fromattedDate === todayDateString;
  return (
    <div className="card">
      <Link className="card-img" to={`/prod/${prod?._id}`}>
        {prod.photos.length > 0 ? (
          <img className="card-img-a" src={prod?.photos[0].url} alt="card_img" />
        ) : (
          <img className="card-img-a" src="/images/logo.png" />
        )}
      </Link>
      <div className="card-body">
        <Link to={`/prod/${prod?._id}`} className="card-content">
          <div className="Prise">
            <p className="content" style={{
              overflow: "hidden", width: "146px",
              height: "20px"
            }}>{prod?.content}</p> 
            <p className="prise">{prod?.price}</p>
          </div>
          <div className="data">
            <p className="location" > {prod?.location}</p> <br />
            {isToday
              ? `Сегодня в ${createdAt.toLocaleDateString().slice(0, 5)}`
              : fromattedDate}
          </div>
        </Link>
        <div className="card-like">
          <i className="fa-regular fa-heart"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;