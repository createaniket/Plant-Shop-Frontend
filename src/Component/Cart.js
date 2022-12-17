import React, { useEffect, useState} from 'react'
import CartItems from './CartItems'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'


const Cart = (props) => {
const navigate = useNavigate();
  const cartinitial = []
  const neworder = []
  const onet = (null)
  const placebtn = ({display:"none"})

  const [cartitem , setCartitem] = useState(cartinitial)
  const [order , setOrder] = useState(neworder)
  const [hide , setHide] = useState(onet)
  const [show , setShow] = useState(placebtn)








  
  const GetCart = () => {

                                            const token =  localStorage.getItem('token')
                                            // console.log("token" , token)

                                            const webURL = 'https://plant-shop-production.up.railway.app/cart/single-cart'

                                             axios.get(webURL,{
                                            headers: {
                                              'Authorization': `Bearer ${token}` 
                                            }
                                            }).then( (response)=>{

                                              console.log("line number52", response.data.data.products)

                                              setCartitem(response.data.data.products)
                                              console.log("line 55", cartitem)
                                            }).catch( (error) => {


                                              console.log("line 56", error)
                                            })

   
    }

  // console.log("cart items h boss", GetCart())

  const Products = cartitem

  console.log("roinierbvirvbreibvuier" , Products)

  useEffect(() => {
    GetCart()
    
    // eslint-disable-next-line
}, [])





  const Checkoutbtn = async() => {


    
  const webapi = 'https://plant-shop-production.up.railway.app/order/checkout'

  const token = localStorage.getItem('token')

  const response = await axios.post(webapi,{


    adress:"Ghaziabad"
  },{
    headers: {
      'Authorization': `Bearer ${token}` 
    }
    })

    console.log("response from check out 40", response.data.order)

    if(response.data.success === true){

      setOrder(response.data.order)


      setTimeout(() => {
      setHide({display:"none"})
      setShow({display:null})
        
      }, 1900);


    

    }

  }



  const proceed = async() =>{

    console.log("zxcghjkl;xdgcvhj")
    const webapi = 'https://plant-shop-production.up.railway.app/order/place-order'

    const token = localStorage.getItem('token')

    console.log("pfnerifborf" , token)
    // const response =
     await axios.post( webapi,{}, {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    }).then( (response) =>{
       console.log("wejdb  eubfj ekberjk", response.data.orderId)
       const orderId = response.data.orderId
       localStorage.setItem('orderid',orderId)

       navigate('/payment')
       
      })
    .catch( (error) => { console.log("eckberhfberj", error)})



  }

  return (
    <>


< div  className='in-between' style={{ margin:"2px" , display:"flex" , justifyContent: "space-around" , height:"100vh" , alignItems:"center"}}>






< div className='right' >

{ Products.map( (Product) => {
            return <CartItems Product={Product}/>
      })}

</div>

      




            <div className='left' style={{ width:"37vw",  backgroundColor:"#bbdee1" , color:"black", height:"46vh", border:"3px solid #5e7970 " , display:"flex", alignItems:"center"}}>


< div className='pad mx-2 my-2'>

                  <div className="d-flex justify-content-between">
                      <p className="mb-2">Subtotal</p>
                      <p className="mb-2">₹ {order.grandTotal}</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Shipping</p>
                      <p className="mb-2">₹{order.shippingPrice}</p>
                    </div>

                    <div className="d-flex justify-content-between mb-4">
                      <p className="mb-2">Total(Incl. taxes)</p>
                      <p className="mb-2">₹ { order.amountToBePaid}</p>
                    </div>

                    <button type="button" className="btn btn-info btn-block btn-lg" onClick={Checkoutbtn} style={hide}>
                      <div className="d-flex justify-content-between">
                        <span>₹{order.amountToBePaid}</span>
                        <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                      </div>
                    </button>
                    <button type='button' className='btn btn-info btn-block btn-lg' onClick={proceed} style={show}> Place Order</button>
</div>


</div>

</div>

    </>
  )
}

export default Cart
