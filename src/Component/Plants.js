import React, { useContext , useEffect} from 'react'
import ProductContext from '../Context/ProductContext'
import PlantItems from './plantItems'

const Plants = () => {

    const context = useContext(ProductContext)

    const { products , GetPlants} = context
    useEffect(() => {
      GetPlants()
      // eslint-disable-next-line
  }, [])



  console.log("ye saaarereeeeeee productssssss" , products)
  return (
    <div>
      
< div className='container'  > 
     <h2  style={{ transform: "translateX(49vh)" , margin : "10px"}}> Plants To Get Home </h2>

    

     < div className='row' >


                            {products.map( (product) => {

                        return <PlantItems product={product} />

                        })}
     </div>
    
     </div>
    </div>
  )
}

export default Plants
