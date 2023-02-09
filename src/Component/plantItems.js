import React from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
const PlantItems = (props) => {
  const navigate = useNavigate();
  let { title , description , price , productimg , _id} = props.product
  const NewImage = `https://plant-shop-production.up.railway.app/${productimg[0]}`
  const maindesc = description.slice(0 , 73)
  const sendtodetail = async()=>{
    let webApiUrl = `https://plant-shop-production.up.railway.app/product/get/${_id}`;
    const response =    await  axios.get(webApiUrl);
    navigate('/productdetail' , {state: {response: response.data}})
  }
  return (
<>
            <div classname="card" onClick={ () =>{sendtodetail()}} style={{width: "25rem" ,  border:"1px solid gray" , height:"51vh" , margin:"19px" , borderRadius:"10px", backgroundColor:"white"}}>
             <img src={NewImage} class="img-thumbnail" alt="Cinque Terre" style={{height:"37vh" , border:"0"}}></img>
            <div classname="card-body" >
                <h5 classname="card-title" style={{ transform: "translateX(10%)"}}>{title}</h5>
                <p classname="card-text"style={{ transform: "translateX(3%)"}}>{maindesc}...</p>
                <p classname="card-text"style={{ transform: "translateX(10%)" , color:"#100f0f", fontSize:"150%"}}> Rs. {price}</p>
            </div>
            </div>
</>
)
};
export default PlantItems;