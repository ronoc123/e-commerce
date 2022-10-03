import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/CartPage";
import { Link } from "react-router-dom";
import CheckoutItem from "../../components/CheckoutItem";
import { useState } from "react";
import Alert from "../../components/Alert";
import Login from "../../components/Login";

const CartPage = () => {
  const { cart, createOrder, clearCart, redirectLogin } = useAppContext();

  const [isOpen, setIsopen] = useState(false);

  const checkOut = () => {
    createOrder();
  };

  if (cart.length === 0) {
    return (
      <Wrapper>
        <div className="add-container">
          <h2>There are no items in your cart :(</h2>
          <Link to={"/product"} className="link">
            Continue Shopping
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {redirectLogin && <Login />}
      <div className="heading">
        <div>Item</div>
        <div>Quantity</div>
        <div>Price</div>
        <div>Subtotal</div>
      </div>
      <div className="checkout-container">
        {cart.map((item) => {
          return <CheckoutItem key={item.id} {...item} />;
        })}
      </div>
      <div className="btn-container">
        <button onClick={checkOut} className="checkout-btn">
          Checkout
        </button>
        <button className="clear-btn" onClick={clearCart}>
          Clear Shopping Cart
        </button>
      </div>
    </Wrapper>
  );
};

export default CartPage;
