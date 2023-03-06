import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import StarRatingComponent from "react-star-rating-component";
import "./movieCard.css";
import {Link} from 'react-router-dom';
import { MdDelete } from "react-icons/md";
const MovieCard = ({ el,deleteMov }) => {

  const handleDel = () => {
    deleteMov(el.id)
  }

  return (
    <div className="movie-card">
      <Card className="myCard" style={{ width: "15rem",height: "350px"  }}>
        <div className='card-image'>
          <Link to={`/Description/${el.id}`}>
          <Card.Img
            variant="top"
            src={el.image}
            style={{ width: "15rem", height: "350px" }}
          /></Link>
        </div>
        <div className="card-content">
          <Card.Body>
            <Card.Title className="Title">{el.name}</Card.Title>
            <Card.Text></Card.Text>
            <div className="DEL"><MdDelete onClick={handleDel}></MdDelete></div>
            <StarRatingComponent className='rating' name="rating" value={el.rate} editing={false} />
          
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default MovieCard;
