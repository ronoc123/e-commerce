import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 8rem; */
  grid-template-columns: 25rem 1fr 15rem 10rem;
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
    justify-self: right;
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
  .login-container {
    justify-self: end;
    align-self: center;
  }
  .lgn-btn {
    border-radius: 0.4rem;
    background: black;
    color: white;
    padding: 0.7rem;
    border: none;
    font-size: 1.3rem;
    cursor: pointer;
  }
  .logout-btn {
    border-radius: 0.4rem;
    background: black;
    color: white;
    padding: 0.7rem;
    border: none;
    font-size: 1.3rem;
    cursor: pointer;
  }
  .small-screen {
    display: none;
  }

  @media screen and (max-width: 1500px) {
    grid-template-columns: 1fr 1fr 10rem;
    .small-screen {
      display: grid;
      justify-self: right;
      align-self: center;
      margin-right: 5rem;
      font-size: 2rem;
      cursor: pointer;
    }
    .logout-btn {
      font-size: 1rem;
    }
    .lgn-btn {
      font-size: 1rem;
    }
    .big-screen {
      display: none;
    }
  }
  @media screen and (max-width: 500px) {
    .very-small-screen {
      display: none;
    }
  }
`;

export default Wrapper;
