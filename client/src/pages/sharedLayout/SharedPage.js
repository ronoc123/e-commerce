import { Link, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const SharedPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default SharedPage;
