import React from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const PlantItems = (props) => {
  const navigate = useNavigate();
  
  let { title , description , price , productimg , _id} = props.product
  
  const NewImage = `https://plant-shop-production.up.railway.app/${productimg[0]}`

  console.log("image h re baba" , NewImage)
  const maindesc = description.slice(0 , 73)



  const sendtodetail = async()=>{


    let webApiUrl = `https://plant-shop-production.up.railway.app/product/get/${_id}`;
  
    const response =    await  axios.get(webApiUrl);

    console.log("ye producst ka response hai " , response)

    // return < Productdetail value={{ response}}/>

    
    navigate('/productdetail' , {state: {response: response.data}})
    

   



  }
  return (
  
<>





      
            <div classname="card" onClick={ () =>{sendtodetail()}} style={{width: "18rem" ,  border:"1px solid  grey" , maxHeight:"78vh" , margin:"19px"}}>
            {/* <img src={NewImage} classname="card-img-top" alt="..."  /> */}
            
             <img src={NewImage} class="img-thumbnail" alt="Cinque Terre"></img>
            <div classname="card-body" >
                <h5 classname="card-title" style={{ transform: "translateX(10%)"}}>{title}</h5>
                <p classname="card-text"style={{ transform: "translateX(3%)"}}>{maindesc}...</p>
                <p classname="card-text"style={{ transform: "translateX(20%)" , color:"red"}}> ₹ {price}</p>

                {/* <a href="/" classname="btn btn-primary">Go somewhere</a> */}
            </div>
            </div>
</>

)
};

export default PlantItems;
