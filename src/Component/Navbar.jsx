import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const toCart = () => {
    navigate("/cart");
  };


  const toSignup = () => {
    navigate("/signup");
  };

  const toLogin = () => {
    navigate("/login");
  };

  const toLogout = () => {
    localStorage.clear("token");
    navigate("/login");
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ background: "#417c14" }}
      >
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">
      <img src={myLogo} alt=""  style={{width:"6vw"}}/>
    </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
              <li className="nav-item" >
                <Link className="nav-link active" aria-current="page" to="/" style={{color:"white"}}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{color:"white"}}>
                  About
                </Link>
              </li>
            </ul>

            <i
              class="fa-solid fa-cart-shopping"
              style={{ margin: "1vw", color: "white" }}
              onClick={() => {
                toCart();
              }}
            ></i>

            {/* < img src='https://i.pinimg.com/736x/df/01/80/df01803b2f9f76d3e662e105f773f7a1.jpg' to="/" alt='wishlist'  style={{height:"46px"}}/> */}

            {
              !localStorage.getItem("token") ? (
                <div className="hide">
                  <button
                    type="button"
                    className="nnn mx-1"
                    onClick={() => {
                      toLogin();
                    }}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary mx-1"
                    onClick={() => {
                      toSignup();
                    }}
                  >
                    Signup
                  </button>
                </div>
              ) : (
                <div class="dropdown-center">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Person Name
                  </button>
                  <ul class="dropdown-menu" style={{minWidth:"inherit"}}>
                    <li>
                      <a class="dropdown-item" href="/">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/" onClick={toLogout}>
                        SIGN OUT
                      </a>
                    </li>
                  </ul>
                </div>
              )

              //  < button type='button' className='nnn mx-1' onClick={ () => { toLogout()}}>Logout</button>
            }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
