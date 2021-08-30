import { AiOutlineCopyright, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {IoPlanetOutline} from 'react-icons/io5'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="copyright-text">
        <AiOutlineCopyright/>
        <p>Copyright 2021 - Nikola Ristoski</p>
      </div>
        <div className="find-me-icons">
            <div>
                <a href="https://github.com/Nikola0707"><AiFillGithub /></a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/nikola-ristoski/"><AiFillLinkedin /></a>
            </div>
           <div>
               <a href="https://nikolaristoski.netlify.app/"><IoPlanetOutline /></a>
            </div>
        </div>
      <div></div>
      <a className="background-image-link" href="http://www.freepik.com">
        Designed by slidesgo / Freepik
      </a>
    </div>
  );
};

export default Footer;
