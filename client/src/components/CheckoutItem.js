const CheckoutItem = ({ price, amount, image }) => {
  return (
    <div className="single-item">
      <img src={image} alt="" />
      <div>{amount}</div>
      <div>${price / 100}</div>
      <div>${(amount * price) / 100}</div>
      <button className="remove-btn">Remove</button>
    </div>
  );
};

export default CheckoutItem;