import Wrapper from "../../assets/wrappers/Home";
import Footer from "../../components/Footer";
import { featuredItems } from "../../utils/featuredItems";
import SingleProduct from "../../components/SingleProduct";

const HomePage = () => {
  return (
    <Wrapper>
      <div className="picture-container"></div>
      <div className="items-container">
        <h1 className="items-title">Featured Items</h1>
        <div className="featured-items">
          {featuredItems.map((item) => {
            return <SingleProduct key={item._id} {...item} />;
          })}
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default HomePage;
