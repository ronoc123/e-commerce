import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= 1 ? (
          <BsStarFill />
        ) : stars >= 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <div className="star-container">
      <div className="stars">
        {tempStars}{" "}
        <span className="reviews">({reviews} customer reviews)</span>
      </div>
    </div>
  );
};

export default Stars;
