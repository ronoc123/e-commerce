import { useAppContext } from "../context/appContext";
const CheckoutItem = ({ price, amount, image, id }) => {
  const { deleteCartItem } = useAppContext();

  return (
    <div className="single-item">
      <img src={image} alt="" />
      <div>{amount}</div>
      <div>${price / 100}</div>
      <div>${(amount * price) / 100}</div>
      <button className="remove-btn" onClick={() => deleteCartItem(id)}>
        Remove
      </button>
    </div>
  );
};

export default CheckoutItem;
