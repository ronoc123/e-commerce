import Wrapper from "../assets/wrappers/footer";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

const Footer = () => {
  return (
    <Wrapper>
      <h2 className="footer-title">Contact Me</h2>
      <div className="info-link-container">
        <div className="link">
          <span className="icon">
            <AiOutlineLinkedin />
          </span>
          <span className="title">LinkedIn</span>
        </div>
        <div className="link">
          <span className="icon">
            <VscGithub />
          </span>
          <span className="title">Github</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
