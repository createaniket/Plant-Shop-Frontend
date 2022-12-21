import React from 'react'
import  { StyleRoot } from 'radium';


const Categories = () => {

  const nnnstyle = {

    
 // Adding media query..
 '@media (max-width: 500px)': {
  // display: 'flex',
  // margin:"19px",
// display:"inline-block" ,  transform:" translateY(3vh)" , maxWidth:"30vw" , marginLeft:"10vh" , padding:"4vw" , maxHeight:"60vh"



background:"pink" , maxHeight:"28vw"
},
background:"pink" , maxHeight:"28vh"




  }
  return (

    <StyleRoot>

    <div className='nnn' style={nnnstyle}>
      

      <span className="contakr" style={{ display:"flex", justifyContent:"center"}} >
      <img class="rounded-circle shadow-2-strong" alt="avatar2" src="https://media.glamour.com/photos/5ea89429e67f360008b064d8/master/w_1172,h_1412,c_limit/Pink%20Anthurium.png" style={{ maxWidth:"20vw" , maxHeight:"15vh", padding:"15px"}}/>
      <img class="rounded-circle shadow-2-strong" alt="avatar2" src="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-hibiscus-gudhal-flower-yellow-plant-in-grower-round-black-pot-1_525x700.jpg?v=1635243190" style={{ maxWidth:"20vw" , maxHeight:"15vh", padding:"15px"}}/>
      <img class="rounded-circle shadow-2-strong" alt="avatar2" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1638392724-the-sill_pothos-marble-queen_variant_small_grow-pot_none_1440x.jpg?crop=0.851xw:0.823xh;0.0657xw,0.144xh&resize=480:*" style={{ maxWidth:"20vw" , maxHeight:"15vh", padding:"15px"}}/>
      <img class="rounded-circle shadow-2-strong" alt="avatar2" src="https://www.plantslive.in/wp-content/uploads/2017/04/kblossfeldiana.jpg" style={{ maxWidth:"19vw" , maxHeight:"15vh", padding:"15px"}}/>
      <img class="rounded-circle shadow-2-strong" alt="avatar2" src="https://media.istockphoto.com/id/1328127636/photo/macro-or-close-up-picture-of-a-purple-geranium-flower-in-bloom-botanical-names-are-geranium.jpg?s=612x612&w=0&k=20&c=e3QIN0kjnc2CU6ycieIBbPg3OGuKwUXalKPyo1HsjBs=" style={{ maxWidth:"19vw" , maxHeight:"15vh", padding:"15px"}}/>


      


      </span>
    </div>
    </StyleRoot>
  )
}

export default Categories
