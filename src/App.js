import "./App.css";
import Cart from "./Component/Cart";
import Category from "./Component/Category";
import Navbar from "./Component/Navbar";
import Plants from "./Component/Plants";
import Productdetail from "./Component/Productdetail";
import ProductState from "./Context/ProductState";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Wishlist from "./Component/Wishlist"
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Alert from "./Component/Alert";
import { useState } from "react";
import Plcaeorder from "./Component/Plcaeorder";
import About from "./Component/About";
import Payment from './Component/Payment'
import Radium, { StyleRoot } from 'radium';

// import Categories from "./Component/Categories";
// import Banner from "./Component/Banner";






function App() {

  const [alert , setAlert] = useState(null) 

  const showAlert = (message , type) =>{


    setAlert({
      msg: message,
      type:type
    })

    setTimeout( () =>{


      setAlert(null);
    }, 1900)
  }

 
  return (
    <ProductState>
      <StyleRoot>

      <Router>
        <Navbar />
        <Alert alert={alert}/>
        {/* <Banner/> */}

        <Routes>
          <Route path="/" element={<Plants />}></Route>
          <Route path="/cart" element={<Cart />}> </Route>
          <Route path="/about" element={<About />}> </Route>
          <Route path="/payment" element={<Payment />}> </Route>



          <Route path="/category" element={<Category />}></Route>
          <Route path="/productdetail" element={<Productdetail showAlert={showAlert} />}></Route>
          <Route path="/wishlist" element={<Wishlist showAlert={showAlert} />}></Route>
          <Route path="/signup" element={<Signup showAlert={showAlert} />}></Route>
          <Route path="/login" element={<Login showAlert={showAlert} />}></Route>
          <Route path="/placeorder" element={<Plcaeorder showAlert={showAlert} />}></Route>

          {/* <Route path="/cart" element={<Login />}></Route> */}




        </Routes>

      </Router>
      </StyleRoot>
    </ProductState>
  );
}

export default App;