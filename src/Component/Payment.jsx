// import React from 'react'
// import Razorpay from 'razorpay'
// const payment = () => {


//   var options = {
//     key: "rzp_test_9L9Q22m1UJ7UA4", // Enter the Key ID generated from the Dashboard
//     amount: "5000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//     currency: "INR",
//     name: "Acme Corp",
//     description: "Test Transaction",
//     image: "https://example.com/your_logo",
//     order_id: "order_KsxN3H8a3ABKWi", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//     callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
//     prefill: {
//         name: "Aniket Pratap Singh",
//         email: "aniketpratapsingh7310@gmail.com",
//         contact: "6392347125"
//     },
//     notes: {
//         address: "Razorpay Corporate Office"
//     },
//     theme: {
//         color: "#3399cc"
//     }
//     };

// //     var rzp1 = new Razorpay(options);
// // document.getElementById('rzp-button1').onclick = function(e){
// // rzp1.open();
// // }

// const onClick = async(e) => {
//   var rzp1 = new Razorpay(options);
//   e.preventDefault();
//   document.getElementById('rzp-button1' ,() =>{
//     rzp1.open();


//   }) 

// }
//   return (
//     <div>
      
// <h1>I am payment page</h1>




// <div class="mine">

// <h1>

//     Aniket-Plants-Shop
// </h1>
// <button id="rzp-button1" onClick={onClick}>Pay</button>
// </div>


//     </div>
//   )
// }

// export default payment
