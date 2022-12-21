import React, { useContext , useEffect} from 'react'
import ProductContext from '../Context/ProductContext'
import Categories from './Categories'
import PlantItems from './plantItems'
// import Qoute from './Qoute'

const Plants = () => {

    const context = useContext(ProductContext)

    const { products , GetPlants} = context
    useEffect(() => {
      GetPlants()
      // eslint-disable-next-line
  }, [])



  console.log("ye saaarereeeeeee productssssss" , products)


  return (


    <>
        < Categories/>

        <styleRoot>


    <div style={{ backgroundColor:"rgb(208 217 217)" }}>
      
      
< div className='container'  > 
     <h2  className='nnnn' style={{ display:"flex", justifyContent:"center"  ,padding:"10px"}}>Plants To Get Home </h2>

    

     < div className='row' style={{ display:"flex", justifyContent:"center"  ,}}>


                            {products.map( (product) => {
                              
                              return <PlantItems product={product} />
                              
                            })}
     </div>
    
     </div>
    </div>

{/* <Qoute/> */}
                            </styleRoot>
    </>
  )
}

export default Plants
