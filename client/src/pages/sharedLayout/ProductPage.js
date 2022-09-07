import Wrapper from "../../assets/wrappers/Product";
import Footer from "../../components/Footer";
import { useAppContext } from "../../context/appContext";
import SingleProduct from "../../components/SingleProduct";

const ProductPage = () => {
  const {
    products: { products: product },
  } = useAppContext();

  return (
    <Wrapper>
      <h2 className="title">Our Collection</h2>
      <div className="product-container">
        {product?.map((item) => {
          return <SingleProduct {...item} key={item._id} />;
        })}
      </div>
      <Footer />
    </Wrapper>
  );
};

export default ProductPage;
