import React, { useRef, useState } from "react";
import "./Productdetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";




const Productdetail = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("888888888888", location);
  const response = location.state.response[0];
  console.log("hcvhvhv 10000", response);

  const images = [
    {
      id: 1,
      value: `https://plant-shop-production.up.railway.app/${response.productimg[0]}`,
    },
    {
      id: 2,
      value: `https://plant-shop-production.up.railway.app/${response.productimg[1]}`,
    },
    {
      id: 3,
      value: `https://plant-shop-production.up.railway.app/${response.productimg[2]}`,
    },
  ];

  const [img, setImg] = useState(images[0].value);

  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add("activated");

    for (var j = 0; j < images.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove("activated");
      }
    }
  };

  const refs = useRef([]);

  refs.current = [];

  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  const productid = location.state.response[0]._id;

  const BuyNow = async () => {
    const webURL = "https://plant-shop-production.up.railway.app/cart/";

    const token = localStorage.getItem("token");

    if (localStorage.getItem("token")) {
      const response = await axios.post(
        webURL,
        {
          product: productid,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("response from cart", response);
      navigate('/cart')

    } else {
      props.showAlert(" please login", "danger");

      navigate("/login");
    }

    // navigate('/cart')
  };

  const addtocart = async () => {
    const webURL = "https://plant-shop-production.up.railway.app/cart/";

    const token = localStorage.getItem("token");

    if (localStorage.getItem("token")) {
      const response = await axios.post(
        webURL,
        {
          product: productid,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("response from cart", response);

      props.showAlert(" Added to cart successfully", "success");
    } else {
      props.showAlert(" please login", "danger");

      navigate("/login");
    }

    // navigate('/cart')
  };

  const maindescription = response.description;

  const style = {
    // Adding media query..
    "@media (max-width: 500px)": {
      display: "flex",
      flexDirection: "column",
    },
  };

  // const forpcstyle = {
  //   // Adding media query..
  //   "@media (min-width: 500px)": {
  //     display: "flex",
  //     margin: "19px",
  //     height: "73vh",
  //     width: "60vw",
  //   },

  //   // background:"red"
  // };

  // const styleforpcrightbox = {
  //   // Adding media query..
  //   "@media (min-width: 500px)": {
  //     margin: "19px",
  //     display: "inline-block",
  //     transform: " translateY(3vh)",
  //     maxWidth: "30vw",
  //     marginLeft: "10vh",
  //     padding: "4vw",
  //     maxHeight: "60vh",
  //   },
  // };

  return (
    <div className="settingforfooter">
      <div className="maincontainer" style={style}>
        <div className="leftcontainer">
          <div className="left">
            <div className="left_1">
              {images.map((data, i) => (
                <div
                  className={i === 0 ? "img_wrap activated" : "img_wrap"}
                  key={i}
                  onMouseOver={() => hoverHandler(data.value, i)}
                  ref={addRefs}
                >
                  <img src={data.value} alt="" />
                </div>
              ))}
            </div>

            <div className="left_2">
              <img src={img} alt="" />
              {/* <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Product Image",
                    isFluidWidth: true,
                    src: img,
                  },
                  largeImage: {
                    src: img,
                    width: 900,
                    height: 700,
                  },
                  // enlargedImageContainerDimensions:{
                  //   width:'150%',
                  //   height:'200%'
                  // }
                }}
              /> */}

              {/* // <img src={img} alt="" /> */}
            </div>
          </div>
        </div>
        <div className="description">
          <h2>About {response.title}</h2>
          <p>{maindescription}</p>

          <span> Rs. {response.price}</span>

          <div>
            <button className="buy" onClick={BuyNow}>Buy now</button>
            <button className="addcart" onClick={addtocart}>
              {" "}
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;
