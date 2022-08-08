import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  .product-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    width: 70vw;
    margin-top: 4rem;
    border: 1px solid lightgrey;
  }
  .image-container {
    display: grid;
  }
  .info-container {
    display: grid;
    grid-template-rows: 3rem auto;
    padding-right: 1rem;
  }
  img {
    width: 100%;
    height: 30rem;
  }
  .product-title {
    text-transform: capitalize;
  }
  .star-container {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
  }
  .reviews {
    color: black;
  }
  .stars {
    color: #ffdd45;
  }
  .increase-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
  }
  .decrease-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
  }
  .amount-container {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .add-btn {
    background: black;
    color: white;
    border: none;
    cursor: pointer;
    width: 30%;
    height: 2rem;
  }
  .price {
    font-weight: 600;
  }
  .company {
    font-weight: 600;
  }
  .category {
    font-weight: 600;
  }
  .available {
    font-weight: 600;
  }
  .cata {
    font-weight: 400;
  }
  .comp {
    font-weight: 400;
  }
  .avail {
    font-weight: 400;
  }
`;

export default Wrapper;
