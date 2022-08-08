import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  min-height: calc(100vh - 7rem);
  .product-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 30rem;
    column-gap: 7rem;
    row-gap: 5rem;
    width: 70vw;
    justify-self: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 2rem;
  }
  .search-container {
    height: 10rem;
  }
  .y {
    border: 2px solid red;
  }

  .title {
    text-align: center;
  }
  img {
    /* width: 23rem; */
    width: 100%;
    height: 22rem;
  }
  .image {
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

  .search-container {
    width: 70vw;
    justify-self: center;
  }

  @media only screen and (max-width: 1300px) {
    .product-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 30rem;
      column-gap: 7rem;
      row-gap: 5rem;
      width: 70vw;
      justify-self: center;
      justify-content: center;
      text-align: center;
    }
  }

  @media only screen and (max-width: 800px) {
    .product-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: 30rem;
      column-gap: 7rem;
      row-gap: 5rem;
      width: 70vw;
      justify-self: center;
      justify-content: center;
      text-align: center;
    }
  }
`;

export default Wrapper;
