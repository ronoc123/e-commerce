import styled from "styled-components";

const Wrapper = styled.div`
  background: black;
  color: white;
  height: 7rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1rem auto;

  .footer-title {
    text-align: center;
  }
  .info-link-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    align-items: center;
  }
  .link {
    color: white;
    display: grid;

    height: 3rem;
    justify-content: center;
  }
`;

export default Wrapper;
