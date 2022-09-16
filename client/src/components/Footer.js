import Wrapper from "../assets/wrappers/footer";
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

const Footer = () => {
  return (
    <Wrapper>
      <h2 className="footer-title">Contact Me</h2>
      <div className="info-link-container">
        <div className="link">
          <span className="icon">
            <AiOutlineMail />
          </span>
          <span className="title">Kamperman.conor@gmail.com</span>
        </div>
        <a href="https://github.com/ronoc123" target="_blank" className="link">
          <span className="icon">
            <VscGithub />
          </span>
          <span className="title">Github</span>
        </a>
      </div>
    </Wrapper>
  );
};

export default Footer;
