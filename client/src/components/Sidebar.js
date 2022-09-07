import Wrapper from "../assets/wrappers/Sidebar";
import { useAppContext } from "../context/appContext";
import { CgCloseR } from "react-icons/cg";
import { Link } from "react-router-dom";
import { TbBuildingSkyscraper } from "react-icons/tb";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, openSidebar } = useAppContext();
  return (
    <Wrapper>
      <div className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
        <button className="close-btn" onClick={closeSidebar}>
          <CgCloseR />
        </button>
        <div className="logo-containers">
          <span className="icon">
            <TbBuildingSkyscraper />
          </span>
          <span className="title">Modern Sky</span>
        </div>
        <div className="links-container">
          <Link to={"/"} onClick={closeSidebar} className="link">
            <span className="link-name">Home</span>
          </Link>
          <Link to={"/product"} onClick={closeSidebar} className="link">
            <span className="link-name">Collection</span>
          </Link>
          <Link to={"/checkout"} onClick={closeSidebar} className="link">
            <span className="link-name">Checkout</span>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
