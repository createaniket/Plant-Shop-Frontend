import "./App.css";
import Cart from "./Component/Cart";
import Category from "./Component/Category";
import Navbar from "./Component/Navbar";
import Plants from "./Component/Plants";
import Productdetail from "./Component/Productdetail";
import ProductState from "./Context/ProductState";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./Component/Footer";
import Wishlist from "./Component/Wishlist"
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Alert from "./Component/Alert";
import { useState } from "react";
import Plcaeorder from "./Component/Plcaeorder";
import About from "./Component/About";






function App() {

  // const cartid = useParams()

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
      <Router>
        <Navbar />
        <Alert alert={alert}/>

        <Routes>
          <Route path="/" element={<Plants />}></Route>
          <Route path="/cart" element={<Cart />}> </Route>
          <Route path="/about" element={<About />}> </Route>

          <Route path="/category" element={<Category />}></Route>
          <Route path="/productdetail" element={<Productdetail showAlert={showAlert} />}></Route>
          <Route path="/wishlist" element={<Wishlist showAlert={showAlert} />}></Route>
          <Route path="/signup" element={<Signup showAlert={showAlert} />}></Route>
          <Route path="/login" element={<Login showAlert={showAlert} />}></Route>
          <Route path="/placeorder" element={<Plcaeorder showAlert={showAlert} />}></Route>

          {/* <Route path="/cart" element={<Login />}></Route> */}




        </Routes>

        <Footer />
      </Router>
    </ProductState>
  );
}

export default App;