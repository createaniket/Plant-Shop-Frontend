import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mkl"  style={{ backgroundColor:"rgb(208 217 217)"}}>
      <div className="kk" >
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#1c2331" }}
        >
          <section
            className="d-flex justify-content-between p-4"
            style={{ backgroundColor: "rgb(123 135 130)" }}
          >
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
             
              <Link href="" className="text-white me-4">
                <i className="fab fa-google"></i>
              </Link>
              
              <Link href="" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
              </Link>
              <Link href="" className="text-white me-4">
                <i className="fab fa-github"></i>
              </Link>
            </div>
          </section>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
               Aniket Pratap Singh
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
