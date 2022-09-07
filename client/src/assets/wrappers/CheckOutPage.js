import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: 2rem;
  .title-container {
    font-size: 2rem;
  }
  .home-btn {
    margin-top: 2rem;
    font-size: 1.5rem;
    color: white;
    background: black;
    width: 15rem;
    height: 4rem;
    display: grid;
    place-items: center;
    border-radius: 2rem;
    cursor: pointer;
  }
`;

export default Wrapper;
