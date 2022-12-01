import React from 'react'

const CartItems = (props) => {

    console.log("  props h item m ye", props.Product)
    const {quantity} = props.Product
    const {title , price , productimg} = props.Product.product
    const NewImage = `https://plant-shop-production.up.railway.app/${productimg[0]}`
    

  return (
    <div>
      

      <>




            <div classname="card my-2"  style={{width: "18rem" , padding:"0px 0px 10px 0px", border:"1px solid  grey" , margin:"2vh"}}>
            <img src={NewImage} classname="card-img-top" alt="..."  style={{ width:"240px" ,height:"240px" , transform: "translateX(10%)"}}/>
            <div classname="card-body" >
                <h5 classname="card-title" style={{ transform: "translateX(10%)"}}>{title}</h5>
                <p classname="card-text"style={{ transform: "translateX(20%)"}}>{price}</p>

                <p classname="card-text"style={{ transform: "translateX(20%)"}}>Quantity {quantity}</p>


                {/* <a href="/" classname="btn btn-primary">Go somewhere</a> */}
            </div>
            </div>

</>
    </div>
  )
}

export default CartItems
