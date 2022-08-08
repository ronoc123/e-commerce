import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 7rem;
  border-bottom: 2px solid lightgrey;
  .logo-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-self: center;
    justify-self: left;
    margin-left: 3rem;
  }
  .icon {
    display: grid;
    place-content: center;
    font-size: 2.5rem;
  }
  .icon-title {
    display: grid;
    place-content: center;
    font-size: 2rem;
  }
  .links-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 4rem;
    justify-self: center;
    align-items: center;
    font-size: 1.2rem;
  }
  .cart-container {
    display: grid;
    grid-template-columns: 1fr;
    align-self: center;
    justify-self: right;
    margin-right: 3rem;
    text-decoration: none;
    color: black;
    position: relative;
  }
  .icon-cart {
    display: grid;
    place-content: center;
    font-size: 2.5rem;
  }
  .cart-amount {
    display: grid;
    place-content: center;
    position: absolute;
    top: -1rem;
    right: -1rem;
    background: black;
    color: white;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    padding-bottom: 0.12rem;
  }
`;

export default Wrapper;
