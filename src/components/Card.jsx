import "../styles/Card.css";
import arrow from "../img/next.png";

const Card = ({ img, title, descripin }) => {
  return (
    <div className="card">
      <img src={img} alt="card" />
      <div className="card-info">
        <h2>{title}</h2>
        <p className="card-description">{descripin}</p>
        <p className="card-link">
          Read more
          <span>
            <img src={arrow} alt="readmore" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
