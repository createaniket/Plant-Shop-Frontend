import React from "react";
import "./Footer.css";
import { FaUser } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

const Footer = () => {
 
    return (
 
 <div id="footer" className="footer">
      <div className="containerfooter">
        <div className="lefter">
          <ul className="socials">
            <li>
              <a
                href="https://github.com/createaniket"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aniket-pratap-singh-28669b193"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa fa-linkedin-square"></i>
              </a>
            </li>

            <li>
              <a
                href="https://aniketdev-portfolio.netlify.app"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fa fa-linke-square">
                  {" "}
                  <FaUser className="net-use" />
                </i>
              </a>
            </li>
          </ul>
        </div>

        <div className="middle">
          <p>Copyright &copy; 2022 createaniket</p>
        </div>

        <div className="righter">
          <div className="contactfooter">
            <p id="contactheadingfooter">Contact</p>
            <p id="phone">
              {" "}
              <BsFillTelephoneInboundFill /> +91 6392347125{" "}
            </p>
            <p id="mail">
              {" "}
              <AiFillMail /> aniketpratapsingh7310@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;