import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Productdetail = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const response = location.state.response[0]
  const NewImage1 = `https://plant-shop-production.up.railway.app/${response.productimg[0]}`
  const NewImage2 = `https://plant-shop-production.up.railway.app/${response.productimg[1]}`

  const productid = location.state.response[0]._id

  const addtocart = async() => {

    const webURL = 'https://plant-shop-production.up.railway.app/cart/'

    const token = localStorage.getItem('token')
              const response = await axios.post(webURL, {
              product:productid
            }, {
              headers: {
                'Authorization': `Bearer ${token}` 
              }
            })
  
            console.log("response from cart" , response)

            props.showAlert(" Added to cart successfully", "success")

    // navigate('/cart')
  }


  const addtowishlist = () => {


    navigate('/wishlist')
  }
  return (

    <>
    
    


< div  className='in-between' style={{ margin:"2px" , display:"flex" , justifyContent: "space-around"}}>



    <div className='set' style={{ display:"inline-block" , maxWidth:"660px" , border:"2px solid grey" , margin:"5vh"}}>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner" style={{ height:"37vh", width:"37vw"}}>
    <div className="carousel-item active">
      <img src="http://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-top-5-air-purifier-and-oxygen-enriching-plant-pack-16969387507852.jpg?v=1634230232" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={NewImage1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={NewImage2} className="d-block w-100" alt="..." />
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



    < div className='righth' style={{  transform: "translateY(10%) " , display:"inline-block" ,}}>


    <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{response.title}</h5>
    <p className="card-text">{response.description}</p>
    <h6 className="card-title"> ₹ {response.price}</h6>

    {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}


  </div>
  {/* <a href="/" className="btn btn-primary" style={{ margin:"2vh"}}>Add to Cart</a> */}
  {/* <a href="/wishlist" className="btn btn-primary" style={{ margin:"2vh"}}>Wishlist</a> */}
  <button className='btn btn-primary' style={{ margin:"2vh"}} onClick={ addtocart}>Add to cart </button>

  <button className='btn btn-primary' style={{ margin:"2vh"}} onClick={addtowishlist}>Add to Wishlist  </button>
</div>









    </div>
    </div>

    </>

  )
}

export default Productdetail
