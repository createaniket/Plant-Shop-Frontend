import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import axios from "axios";

const UserProfile = () => {
  const ordersInitial = [];
  const [orders, setOrders] = useState(ordersInitial);

  const orderproductsinitial = []
  const [orerproducts , setOrderproducts] = useState(orderproductsinitial)

  
  const [mcredentials, setMredentials] = useState({
    name: "",
    email: "",
  });

  // const orderReceipt = orders[0].user;

  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
    email: "",
  });

 

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const ToUpdate = async (e) => {
    e.preventDefault();

    const webURL = "https://natureverse.onrender.com/userroute/users/me"
    const token = localStorage.getItem('token')

    const {name , email} = credentials

    await axios.patch(webURL, {
      name:name,
    email:email
    }, 
    {
      
        headers: {
          Authorization: `Bearer ${token}`,
        },
      

    })
    .then(function (response) {
     console.log("wqdjvwevckjcevkjecjk", response)
    })
    .catch(function (error) {
console.log(error)
    });
  };

  // console.log("jcbjdbc", orderReceipt);

  const GetOrders = async () => {
    const webURL = "https://natureverse.onrender.com/order/getorders";

    const token = localStorage.getItem("token");

    if (localStorage.getItem("token")) {
      const response = await axios.get(webURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrders(response.data.orders);

      if(response.data.orders.length > 0)
      setOrderproducts(response.data.orders[0].products)
    }
  };

  const GetMe = async() => {

    const webURL = "https://natureverse.onrender.com/userroute/users/me"

    const token = localStorage.getItem("token");

    if(token){


  const response =     await axios.get(webURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },

      });
      console.log("hcjgxhz", response)

      setMredentials(response.data)
    }
  }

  

  useEffect(() => {
    GetOrders();
    GetMe();
  }, []);




  let ordersLength = orders.length;

  console.log("ckh sevcks", ordersLength);

  return (
    <div className="maiprofile">
      <div className="maindivforprofile">
        <div class="gradientmain forpic text-center text-white">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
            alt="Avatar"
            class="img-fluid my-5"
            style={{ width: "80px" }}
          />
          <h5>{`${mcredentials.name}`}</h5>
          {/* <i class="far fa-edit mb-5"></i> */}
          <div className="formdiv">
            <form onSubmit={ToUpdate}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  defaultValue={`${mcredentials.name}`}
                  onChange={onChange}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  defaultValue={`${mcredentials.email}`}
                  onChange={onChange}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={onChange}
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  {" "}
                  Confirm Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cpassword"
                  name="cpassword"
                  onChange={onChange}
                  aria-describedby="emailHelp"
                />
              </div>
              <button type="submit" className="btn btn-primary mb-5">
                Update
              </button>
            </form>
          </div>
        </div>

        <div class="orderdiv">
          <div class="kklttttt">
            <div class="card" style={{ borderRdius: "10px" }}>
              <div class="card-header px-4 py-5">
                <h5 class="text-muted mb-0">
                  Thanks for your Order,{" "}
                  <span style={{ color: "#a8729a" }}>{`${mcredentials.name}`}</span>!
                </h5>
              </div>

              {ordersLength > 0 ? (
                <div className="ordersmaindiv">
                  {" "}



                                          
<div class="d-flex justify-content-between align-items-center mb-4">
                      <p
                        class="lead fw-normal mb-0 p-4"
                        style={{ color: "#a8729a" }}
                      >
                        Receipt{" "}
                      </p>
                      <p class="small text-muted mb-0 p-4">
                        Receipt Voucher : {`${orders[0].user.slice(10)}`}
                      </p>
                    </div>
                  {orerproducts.map((element) => (
                    <div>







                    <div class="card shadow-0 border mb-4">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-2">
                            <img
                              src={`https://natureverse.onrender.com/${element.product.productimg[0]}`}
                              class="img-fluid"
                              alt="Phone"
                            />
                          </div>
                          <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                            <p class="text-muted mb-0">{`${element.product.title}`} </p>
                          </div>
                          <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                            <p class="text-muted mb-0 small">Plant</p>
                          </div>
                          <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                            <p class="text-muted mb-0 small">For home and office</p>
                          </div>
                          <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                            <p class="text-muted mb-0 small">quantity : {`${element.quantity}`}</p>
                          </div>
                          <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                            <p class="text-muted mb-0 small"> price : $ {`${element.unitPrice}`}</p>
                          </div>
                        </div>
                        <hr
                          class="mb-4"
                          style={{ backgroundColor: "#e0e0e0", opacity: "1" }}
                        />
                        <div class="row d-flex align-items-center">
                          <div class="col-md-2">
                            <p class="text-muted mb-0 small">Track Order</p>
                          </div>
                          <div class="col-md-10">
                            <div
                              class="progress "
                              style={{ height: "6px", borderRadius: "16px" }}
                            >
                              <div
                                class="progress-bar"
                                role="progressbar"
                                style={{
                                  width: "15%",
                                  borderRadius: "16px",
                                  backgroundColor: "#a8729a"
                                }}
                                aria-valuenow="10"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div class="d-flex justify-content-around mb-1">
                              <p class="text-muted mt-1 mb-0 small ms-xl-5">
                                Out for delivary
                              </p>
                              <p class="text-muted mt-1 mb-0 small ms-xl-5">
                                Delivered
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
      </div>





      <div class="card-body p-4">
             
             <div class="d-flex justify-content-between pt-2">
               <p class="fw-bold mb-0">Order Details</p>
               <p class="text-muted mb-0">
                 <span class="fw-bold me-4">Total</span> $  {`${element.total}`}
               </p>
             </div>

             <div class="d-flex justify-content-between pt-2">
               <p class="text-muted mb-0">Invoice Number :{`${orders[0]._id.slice(10)}`}</p>
               <p class="text-muted mb-0">
                 <span class="fw-bold me-4">Discount</span> 0.00
               </p>
             </div>

             <div class="d-flex justify-content-between">
               <p class="text-muted mb-0">Invoice Date : {`${orders[0].createdAt.slice(0, 10)}`}</p>
               <p class="text-muted mb-0">
                 {" "}
                 <span class="fw-bold me-4">TAX</span> 0.00
               </p>
             </div>

             <div class="d-flex justify-content-between mb-5">
               <p class="text-muted mb-0">
                 Recepits Voucher : {`${orders[0].user.slice(10)}`}
               </p>
               <p class="text-muted mb-0">
                 <span class="fw-bold me-4">Delivery Charges</span> $100
               </p>
             </div>
           </div>

           <div
                    class="card-footer border-0 px-4 py-5"
                    style={{
                      backgroundColor: "#a8729a",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                    }}
                  >
                    <h5 class="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">
                      {" "}
                      Total paid: <span class="h2 mb-0 ms-2"> $  {`${orders[0].amountToBePaid}`}</span>
                    </h5>
                  </div>{" "}

                      




                    </div>

                    
                  ))}
                
               
                </div>
              ) : (
                <div className="noorders">
                  "You havn't place any order yet!!!"
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
