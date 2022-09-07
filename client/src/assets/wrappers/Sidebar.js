import styled from "styled-components";

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    transition: var(--transition);
    z-index: -1;
    transform: translate(-100%);
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .close-btn {
    position: absolute;
    right: 2rem;
    top: 2rem;
    font-size: 3rem;
    cursor: pointer;
    background: none;
    border: none;
  }
  .links-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5rem 5rem 5rem 5rem 5rem;
    font-size: 1.4rem;
  }
  .header {
    height: 5rem;
    font-size: 2rem;
  }
  .logo-containers {
    height: 7rem;
    font-size: 2rem;
    color: var(--clr-primary-1);
    padding-left: 2rem;
    padding-top: 2rem;
  }
  .link {
    transition: var(--transition);
    align-content: center;
    padding-left: 2rem;
    align-self: center;
    height: 5rem;
    display: grid;
  }
  .link-name {
    transition: var(--transition);
  }
  .link:hover {
    color: white;
    background: black;
    .link-name {
      transform: translate(2%);
    }
  }
`;

export default Wrapper;
