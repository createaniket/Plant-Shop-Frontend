import React from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const PlantItems = (props) => {
  const navigate = useNavigate();
  
  let { title , description , price , productimg , _id} = props.product
  
  const NewImage = `https://plant-shop-production.up.railway.app/${productimg[0]}`

  console.log("image h re baba" , NewImage)


  const sendtodetail = async()=>{


    let webApiUrl = `https://plant-shop-production.up.railway.app/product/get/${_id}`;
  
    const response =    await  axios.get(webApiUrl);

    console.log("ye producst ka response hai " , response)
    // return < Productdetail value={{ response}}/>

    
    navigate('/productdetail' , {state: {response: response.data}})
    

   



  }
  return (
  
<>




            <div classname="card my-2" onClick={ () =>{sendtodetail()}} style={{width: "18rem" , padding:"0px 0px 10px 0px", border:"1px solid  grey" , margin:"2vh"}}>
            <img src={NewImage} classname="card-img-top" alt="..."  style={{ width:"240px" , height:"240px" , transform: "translateX(10%)"}}/>
            <div classname="card-body" >
                <h5 classname="card-title" style={{ transform: "translateX(10%)"}}>{title}</h5>
                <p classname="card-text"style={{ transform: "translateX(8%)"}}>{description}</p>
                <p classname="card-text"style={{ transform: "translateX(20%)"}}>{price}</p>

                {/* <a href="/" classname="btn btn-primary">Go somewhere</a> */}
            </div>
            </div>

</>

)
};

export default PlantItems;
