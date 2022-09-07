import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 5rem;
  .login-container {
    display: grid;
    width: 30vw;
    height: 60vh;
    border-radius: 1rem;
    box-shadow: var(--dark-shadow);
    grid-template-columns: 1fr;
    grid-template-rows: 5rem auto;
    min-width: 25rem;
    min-height: 25rem;
  }
  .form-row {
    display: grid;
    width: 60%;
    justify-self: center;
  }
  .form-label {
    align-self: flex-end;
    font-size: 1.3rem;
    text-transform: capitalize;
    height: 2rem;
  }
  .form-input {
    font-size: 1.3rem;
    padding-left: 0.5rem;
    border-radius: 0.5rem;
    height: 3rem;
  }
  .title {
    text-align: center;
  }
  .login-btn {
    background: none;
    border: none;
    width: 10rem;
    height: 3rem;
    justify-self: center;
    margin-top: 2rem;
    font-size: 1.5rem;
    cursor: pointer;
    border: 2px solid black;
  }
  .p-title {
    text-align: center;
  }
  .member-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 600;
    color: #0062ff;
    font-size: 1rem;
  }
  .alert {
    text-align: center;
  }
`;

export default Wrapper;
