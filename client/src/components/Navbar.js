import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { useAppContext } from "../context/appContext";
import { FaUserCircle, FaBars } from "react-icons/fa";
const Navbar = () => {
  const { cart, user, logoutUser, openSidebar, closeSidebar, isSidebarOpen } =
    useAppContext();

  const logout = () => {
    logoutUser();
  };

  return (
    <Wrapper>
      <div className="logo-container">
        <div className="icon">
          <TbBuildingSkyscraper />
        </div>
        <span className="icon-title very-small-screen">Modern Sky</span>
      </div>
      <FaBars className="small-screen" onClick={openSidebar} />
      <ul className="links-container big-screen">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Collection</Link>
        </li>
        <li>
          <Link to="/cart">Checkout</Link>
        </li>
      </ul>
      {/* LOGIN BUTTON */}
      <div className="login-container big-screen">
        {user === null || user === "" ? (
          <Link className="lgn-btn" to={"/login"}>
            Login
          </Link>
        ) : (
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        )}
      </div>
      {user === null || user === "" ? (
        <Link className="lgn-btn small-screen" to={"/login"}>
          Login
        </Link>
      ) : (
        <button className="logout-btn small-screen" onClick={logout}>
          Logout
        </button>
      )}
      {/* LOGIN BUTTON END */}
      <Link to={"/cart"} className="cart-container big-screen">
        <div className="icon-cart">
          <AiOutlineShoppingCart />
        </div>
        <span className="cart-amount">{cart.length}</span>
      </Link>
    </Wrapper>
  );
};

export default Navbar;
