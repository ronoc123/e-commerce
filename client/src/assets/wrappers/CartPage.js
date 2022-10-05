import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  .add-container {
    display: grid;
    place-items: center;
  }
  .link {
    text-decoration: none;
    display: grid;
    place-content: center;
    color: white;
    background: black;
    width: 20rem;
    height: 3rem;
    border-radius: 3rem;
  }
  .checkout-container {
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    min-height: 10rem;
    width: 70vw;
    display: grid;
    justify-self: center;
    grid-template-columns: 1fr;
  }
  .single-item {
    display: grid;
    grid-template-columns: 5rem 1fr 1fr 1fr 5rem;
    column-gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  img {
    width: 100%;
    height: 5rem;
  }
  .heading {
    display: grid;
    grid-template-columns: 5rem 1fr 1fr 1fr 5rem;
    column-gap: 1rem;
    width: 70vw;
    align-items: flex-end;
    margin-top: 4rem;
    padding-bottom: 1rem;
  }
  .remove-btn {
    background: #ffb2a8;
    color: #9c1200;
    border: none;
    border-radius: 1rem;
    font-size: 1rem;
    height: 2rem;
    width: 6rem;
    cursor: pointer;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 2rem;
    margin-top: 2rem;
    /* border: 2px solid red; */
    width: 70%;
    /* width: 70vw; */
  }
  .checkout-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    background: #b8ffc0;
    color: #00800e;
    border-radius: 0.5rem;
    padding: 1rem;
    cursor: pointer;
    width: 100%;
    max-width: 15rem;
    height: 100%;
  }
  .clear-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    background: #ffb2a8;
    color: #9c1200;
    width: 100%;
    height: 100%;
    max-width: 15rem;
    border-radius: 0.5rem;
    padding: 1rem;
    cursor: pointer;
  }
  @media screen and (max-width: 900px) {
    .single-item {
      grid-template-columns: 5rem 1fr 1fr 1fr;
    }
    .heading {
      grid-template-columns: 5rem 1fr 1fr 1fr;
    }
    .big-screen {
      display: none;
    }
  }
`;

export default Wrapper;
