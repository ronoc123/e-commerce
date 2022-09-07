import Wrapper from "../../assets/wrappers/CheckOutPage";
import { Link } from "react-router-dom";

const CheckOutPage = () => {
  return (
    <Wrapper>
      <div className="title-container">
        Thank Your For Shopping. Your Order Has Been Placed!
      </div>
      <Link to={"/"} className="home-btn">
        Back to Home
      </Link>
    </Wrapper>
  );
};

export default CheckOutPage;
