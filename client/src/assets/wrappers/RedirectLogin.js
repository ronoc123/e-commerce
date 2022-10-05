import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  display: grid;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: var(--transition);
  z-index: 2;
  place-items: center;
  .container {
    background: white;
    position: relative;
    width: 40%;
    min-width: 25rem;
    max-width: 45rem;
    min-height: 20rem;
    height: 50%;
    display: grid;
    grid-template-columns: 1fr;
    /* grid-template-rows: 20% 60%; */
    place-items: center;
    border-radius: 0.5rem;
    /* opacity: 0.9; */
  }
  .close-icon {
    position: absolute;
    font-size: 3rem;
    cursor: pointer;
    top: 0.5rem;
    right: 0.5rem;
    color: #ff5257;
    background: none;
    border: none;
  }
  .login-container {
    /* background: blue; */
    padding: 1rem;
    display: grid;
    gap: 0.5rem;
    /* border: 1px solid red; */
    width: 70%;
    height: 80%;
  }
  .title {
    text-align: center;
  }
  .form-row {
    display: grid;
    width: 100%;
    justify-content: center;
  }

  .form-label {
    text-transform: capitalize;
    align-self: flex-end;
  }
  .login-btn {
    width: 20%;
    min-width: 2rem;
    justify-self: center;
    margin-top: 1rem;
    cursor: pointer;
    border: 2px solid black;
    background: none;
    min-width: 5rem;
  }
  .p-title {
    text-align: center;
  }
  .member-btn {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1rem;
    color: #0062ff;
  }
  .alert {
    text-align: center;
  }
  .btn-containers {
    justify-self: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
`;

export default Wrapper;
