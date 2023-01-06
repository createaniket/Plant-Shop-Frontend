import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Productdetail = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("888888888888", location)
  const response = location.state.response[0]
  console.log("hcvhvhv 10000" , response)
  const NewImage1 = `https://plant-shop-production.up.railway.app/${response.productimg[0]}`
  const NewImage2 = `https://plant-shop-production.up.railway.app/${response.productimg[1]}`
  const NewImage3 = `https://plant-shop-production.up.railway.app/${response.productimg[2]}`


  const productid = location.state.response[0]._id
  console.log("jkrvrbrbgt", productid)

  const addtocart = async() => {

    const webURL = 'https://plant-shop-production.up.railway.app/cart/'

    const token =  localStorage.getItem('token')

    if(localStorage.getItem('token')){



      const response = await axios.post(webURL, {
        product:productid
      }, {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      })


      console.log("response from cart" , response)

      props.showAlert(" Added to cart successfully", "success")


    }else {
      props.showAlert(" please login", "danger")

    navigate('/login')

    }

             

    // navigate('/cart')
  }

  const maindescription = response.description
  function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}


  const style = {
 
    // Adding media query..
    '@media (max-width: 500px)': {
      display: 'flex',
      flexDirection:"column"
    },
    margin:"2px" , display:"flex" , justifyContent: "space-around", height:"100vh" , paddingTop:"10vh"
  };

  const forpcstyle = {

 // Adding media query..
 '@media (min-width: 500px)': {
  display: 'flex',
  margin:"19px",
  height:"73vh",
  width:"60vw",
},

background:"red"


  }

  const styleforpcrightbox = {


 // Adding media query..
 '@media (min-width: 500px)': {
  margin:"19px",
display:"inline-block" ,  transform:" translateY(3vh)" , maxWidth:"30vw" , marginLeft:"10vh" , padding:"4vw" , maxHeight:"60vh"

},

  }

  return (

    <>
    
    





< div  className='in' style={style}>



    <div className='set container' style={{ display:"inline-block",}}>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner" style={forpcstyle}>
    <div className="carousel-item active">
      <img src={NewImage2} className="d-block w-100" alt="..." style={{border:"2px solid black" }}/>
    </div>
    <div className="carousel-item">
      <img src={NewImage1} className="d-block w-100" alt="..."  style={{border:"2px solid black"}}/>
    </div>
    <div className="carousel-item">
      <img src={NewImage3} className="d-block w-100" alt="..." style={{ border:"2px solid black"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>



    < div className='righth' style={styleforpcrightbox}>


    <div className="card" style={{ background:"#b6c2b6"}}>
  <div className="card-body">
    <h5 className="card-title">{response.title}</h5>
    <p className="card-text">{truncate(maindescription, 35)}...</p>
    <h6 className="card-title"> ₹ {response.price}</h6>



  </div>

  <button className='btn'  style={{ margin:"2vh" , background:"#077707"}} onClick={ addtocart}>Add to cart </button>

</div>




    </div>
    </div>

    </>

  )
}

export default Productdetail
