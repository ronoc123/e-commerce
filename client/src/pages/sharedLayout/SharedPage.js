import { Link, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const SharedPage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedPage;
