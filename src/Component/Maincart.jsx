import React, { useEffect, useState } from "react";
import axios from "axios";
import './Maincart.css'
// import { useNavigate } from 'react-router-dom'

const Maincart = (props) => {
  const refresh = () => window.location.reload(true);
  // const navigate = useNavigate();
  const cartinitial = [];
  const neworder = [];

  const [show , setShow] = useState('')
  const [hide , setHide] = useState('none')

  const [cartitem, setCartitem] = useState(cartinitial);

  const [order, setOrder] = useState(neworder);

  const GetCart = () => {
    const token = localStorage.getItem("token");
    const webURL =
      "https://plant-shop-production.up.railway.app/cart/single-cart";
    axios
      .get(webURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCartitem(response.data.data.products);
      })
      .catch((error) => {
        console.log("line 24", error);
      });
  };

  const Products = cartitem;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      GetCart();
    }
    //   setTimeout( ()=> {

    if (cartitem.length === 0) {
      props.showAlert("No items in your cart right now", "success");
    }

    //   }, 5000)

    // eslint-disable-next-line
  }, []);

  const DeleteCartItem = async (productid) => {
    const webapi = `https://plant-shop-production.up.railway.app/cart/deleteCartItem/${productid}`;
    const token = localStorage.getItem("token");
    await axios.post(
      webapi,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    refresh();
  };

  const IncreaseProductQuantity = async (productid) => {
    const webapi = `https://plant-shop-production.up.railway.app/cart/increase/${productid}`;
    const token = localStorage.getItem("token");
    await axios.post(
      webapi,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    refresh();
  };

  const DecreaseProductQuantity = async (productid) => {
    const webapi = `https://plant-shop-production.up.railway.app/cart/decrease/${productid}`;
    const token = localStorage.getItem("token");
    await axios.post(
      webapi,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    refresh();
  };

  // const ClearCart = async () => {
  //   const webapi = `https://plant-shop-production.up.railway.app/cart/emptycart`;
  //   const token = localStorage.getItem("token");
  //   await axios.delete(
  //     webapi,
  //     {},
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );
  //   refresh();
  // };
  const Checkoutbtn = async () => {
    const webapi =
      "https://plant-shop-production.up.railway.app/order/checkout";
    const token = localStorage.getItem("token");
    const response = await axios.post(
      webapi,
      {
        adress: "Ghaziabad",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data.success === true) {
      setOrder(response.data.order);
      setHide('')
      setShow('none')
    }
  };



  const PlaceOrder = async () => {
    const webapi =
      "https://plant-shop-production.up.railway.app/order/place-order";
    const token = localStorage.getItem("token");
    await axios
      .post(
        webapi,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const orderId = response.data.orderId;
        localStorage.setItem("orderid", orderId);
        RazorpayHadler();
      })
      .catch((error) => {
        console.log("eckberhfberj", error);
      });
  };

  const RazorpayHadler = () => {
    const options = {
      key: "rzp_test_9L9Q22m1UJ7UA4",
      amount: order.amountToBePaid,
      order_id: localStorage.getItem("orderid"),
      name: "Patch Plants",
      description: "This is the only test mode of payment",
      handler: {
        function(response) {
          console.log("This is the response from Razorpay", response);
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="maincartcontent">
      <section className="h-100 " >
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8 maincarthai">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {`${Products.length}`} items</h5>
                </div>
                <div className="card-body">
                  {Products.map((element) => {
                    return (
                      <div>
                        {/* <!-- Single item --> */}
                        <div className="row">
                          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                            {/* <!-- Image --> */}
                            <div
                              className="bg-image hover-overlay hover-zoom ripple rounded"
                              data-mdb-ripple-color="light"
                            >
                              <img
                                src={`https://plant-shop-production.up.railway.app/${element.product.productimg[0]}`}
                                className="w-100"
                                alt="Blue Jeans Jacket"
                              />
                              <a href="#!">
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor: "rgba(251, 251, 251, 0.2)",
                                  }}
                                ></div>
                              </a>
                            </div>
                            {/* <!-- Image --> */}
                          </div>

                          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                            {/* <!-- Data --> */}
                            <p>
                              <strong>{`${element.product.title} `}</strong>
                            </p>
                            <p>Size: for home and office</p>
                            <button
                              type="button"
                              className="btn btn-danger btn-sm me-1 mb-2"
                              onClick={() => {
                                DeleteCartItem(`${element.product._id}`);
                              }}
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                          </div>

                          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            {/* <!-- Quantity --> */}
                            <div
                              className="d-flex mb-4"
                              style={{ maxWidth: "300px" }}
                            >
                              <button
                                className="btn btn-primary px-3 me-2"
                                disabled={element.quantity === 1}

                                onClick={() => {
                                  DecreaseProductQuantity(
                                    `${element.product._id}`
                                  );
                                }}
                              >
                                <i className="fas fa-minus"></i>
                              </button>

                              <div className="form-outline">
                                <input
                                  id="form1"
                                  min="0"
                                  name="quantity"
                                  value={`${element.quantity}`}
                                  type="number"
                                  className="form-control"
                                />
                                <label className="form-label" htmlFor="form1">
                                  Quantity
                                </label>
                              </div>

                              <button
                                className="btn btn-primary px-3 ms-2"
                                // onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                onClick={() => {
                                  IncreaseProductQuantity(
                                    `${element.product._id}`
                                  );
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                            <p className="text-start text-md-center">
                              <strong>
                                {" "}
                                $ {`  ${element.product.price} `}
                              </strong>
                            </p>
                          </div>
                        </div>
                        <hr className="my-4" />
                      </div>
                    );
                  })}
                </div>
                <button className="btn btn-primary btn-lg btn-block" onClick={Checkoutbtn} style={{display:`${show}`}}> Proceed to checkout</button>

              </div>




              <div className="card mb-4" >
                <div className="card-body">
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0">Between 2 to 4 days</p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{display:`${hide}`}}>
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>$ {order.grandTotal}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>$ {order.shippingPrice}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>$ {order.amountToBePaid}</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                    onClick={PlaceOrder}
                  >
                    Pay now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maincart;
