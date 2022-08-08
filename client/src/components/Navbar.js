import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { useAppContext } from "../context/appContext";
const Navbar = () => {
  const { cart } = useAppContext();
  return (
    <Wrapper>
      <div className="logo-container">
        <div className="icon">
          <TbBuildingSkyscraper />
        </div>
        <span className="icon-title">Scrap</span>
      </div>
      <ul className="links-container">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Collection</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
      {/* LOGIN BUTTON */}
      {/* LOGIN BUTTON END */}
      <Link to={"/cart"} className="cart-container">
        <div className="icon-cart">
          <AiOutlineShoppingCart />
        </div>
        <span className="cart-amount">{cart.length}</span>
      </Link>
    </Wrapper>
  );
};

export default Navbar;
