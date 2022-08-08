import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  .picture-container {
    height: 60vh;
    background: linear-gradient(
        to left,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.7)
      ),
      url("./images/homepic.jpg") center/cover fixed no-repeat;
    opacity: 0.92;
  }
  .items-container {
    justify-self: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  .featured-items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 5rem;
    height: 30rem;
    width: 80vw;
    text-align: center;
  }
  .items-title {
    text-align: center;
  }
  .single-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 2rem 4.5rem;
    border: 1px solid lightgrey;
  }
  .add-btn {
    background: black;
    color: white;
    display: grid;
    place-items: center;
    text-decoration: none;
    width: 80%;
    height: 2.5rem;
  }
  .btn-container {
    display: grid;
    place-items: center;
  }
  .product-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .product-price {
    justify-self: right;
  }
  .product-name {
    justify-self: left;
    text-transform: capitalize;
  }
  img {
    width: 100%;
    height: 22rem;
  }
`;

export default Wrapper;
