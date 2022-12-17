import React , {useState} from 'react'
import ProductContext from './ProductContext'
import axios from 'axios'

const ProductState = (props) => {


 
    const productsInitial = []


    const [products , setProducts]  = useState( productsInitial)
    



    const GetPlants = async() => {
      let webApiUrl = 'https://plant-shop-production.up.railway.app/product/get';

    const response =    await  axios.get(webApiUrl);
    console.log("response from fetch all plants " , response)
    if(response.status === 200) {
      setProducts(response.data)
    }
    else{
      setProducts("Some error occured")
    }
    }
  return (
    <div>
      < ProductContext.Provider value = { { products:products , GetPlants:GetPlants} }  >
      { props.children}
      </ProductContext.Provider>
    </div>
  )
}
export default ProductState