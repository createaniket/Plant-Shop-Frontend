import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const toCart = () => {
    navigate("/cart");
  };

  const toLogin = () => {
    navigate("/login");
  };

  const toLogout = () => {
    localStorage.clear("token");
    localStorage.clear("personame");
    navigate("/login");
  };


  const PersonName = localStorage.getItem('personame')
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ background: "#417c14" }}
      >
        <div className="container-fluid">
     
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

           <div className="cartcontext"   style={{paddingRight:"1vw"}} onClick={() => {
                toCart();
              }}>
             <i
              class="fa-solid fa-cart-shopping"
              style={{paddingRight:"6px", color: "white" }}
              
              ></i><span className="carttext"   type="button" style={{  color:"white"}}>CART</span>
              </div>

            {
              !localStorage.getItem("token") ? (
                <div className="hide">
                  <span
                    type="button"
                    className="nnn mx-1"
                    style={{color:"white", paddingRight:"3vw"}}
                    onClick={() => {
                      toLogin();
                    }}
                  ><i class="fa-solid fa-user mx-2"></i>
                    SIGN IN
                  </span>
                </div>
              ) : (
                <div className="dropdown-center">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {PersonName}
                </button>
                <ul className="dropdown-menu" style={{minWidth:"inherit"}}>
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/login" onClick={toLogout}>
                      Logout
                    </Link>
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
