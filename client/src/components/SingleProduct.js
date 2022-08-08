import { Link } from "react-router-dom";
const SingleProduct = ({ name, description, image, price, id }) => {
  return (
    <div className="single-container">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-price">$ {price / 100}</div>
      </div>
      <div className="btn-container">
        <Link to={`/products/${id}`} className="add-btn">
          Add to Cart
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
