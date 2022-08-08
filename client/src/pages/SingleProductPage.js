import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../assets/wrappers/SingleProductPage";
import Stars from "../components/Stars";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SingleProductPage = () => {
  const [number, setNumber] = useState(1);

  const {
    fetchSingleProduct,
    singleProduct: { product },
    updateCart,
  } = useAppContext();

  const navigate = useNavigate();

  const { id } = useParams();

  const decrease = (num) => {
    if (num <= 1) {
      num = 1;
    } else {
      num = num - 1;
    }

    setNumber(num);
  };
  const increase = (num) => {
    if (num >= product?.inventory) {
      num = product?.inventory;
    } else {
      num = num + 1;
    }
    setNumber(num);
  };

  const addToCart = () => {
    updateCart(product._id, product.price, number, product.image);
    navigate("/product");
  };

  useEffect(() => {
    fetchSingleProduct(id);
  }, []);

  return (
    <Wrapper>
      <div className="product-container">
        <div className="image-container">
          <img src={product?.image} alt="" />
        </div>
        <div className="info-container">
          <h2 className="product-title">{product?.name}</h2>
          <Stars
            stars={product?.averageRating}
            reviews={product?.numOfReviews}
          />
          <div className="price">${product?.price / 100}</div>
          <div>{product?.description}</div>
          <div className="category">
            Category : <span className="cata">{product?.category}</span>
          </div>
          <div className="company">
            Company : <span className="comp"> {product?.company}</span>
          </div>
          <div className="available">
            Available: <span className="avail">{product?.inventory}</span>
          </div>
          <div className="checkout-container">
            <div className="amount-container">
              <button onClick={() => decrease(number)} className="decrease-btn">
                <AiOutlineMinus />
              </button>
              <span> {number} </span>
              <button onClick={() => increase(number)} className="increase-btn">
                <AiOutlinePlus />
              </button>
            </div>
            <button
              className="add-btn"
              type="button"
              onClick={() => addToCart()}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProductPage;
