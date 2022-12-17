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
    navigate('/login')

    }

             

    // navigate('/cart')
  }


  const addtowishlist = async() => {



    navigate('/wishlist')
  }
  return (

    <>
    
    


< div  className='in-between' style={{ margin:"2px" , display:"flex" , justifyContent: "space-around", height:"100vh" , paddingTop:"10vh"}}>



    <div className='set' style={{ display:"inline-block" , margin:"5vh" , maxHeight:"54vh"}}>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner" style={{ height:"45", width:"37vw"}}>
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



    < div className='righth' style={{   display:"inline-block" ,  transform:" translateY(5vh)"}}>


    <div className="card" style={{width: "28rem" , background:"#b6c2b6"}}>
  <div className="card-body">
    <h5 className="card-title">{response.title}</h5>
    <p className="card-text">{response.description}</p>
    <h6 className="card-title"> ₹ {response.price}</h6>

    {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}


  </div>
  {/* <a href="/" className="btn btn-primary" style={{ margin:"2vh"}}>Add to Cart</a> */}
  {/* <a href="/wishlist" className="btn btn-primary" style={{ margin:"2vh"}}>Wishlist</a> */}
  <button className='btn'  style={{ margin:"2vh" , background:"#077707"}} onClick={ addtocart}>Add to cart </button>

  <button className='btn' style={{ margin:"2vh" , background:"#077707"}} onClick={addtowishlist}>Add to Wishlist  </button>
</div>




    </div>
    </div>

    </>

  )
}

export default Productdetail
