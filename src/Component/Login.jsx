import React, { useContext , useState } from 'react'
import ProductContext from '../Context/ProductContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {




    
  const [credentials , setCredentials] = useState({password:"" , email:""})

  const navigate = useNavigate();

  // console.log("navigate" , navigate)
  const context = useContext(ProductContext)
  console.log(context)

 


  const  onChange = (e)=> {
    setCredentials({ ...credentials , [e.target.name] : e.target.value} )
  }



  const toLogin = async(e) => {
    e.preventDefault();

    console.log(credentials)
    const {email , password} = credentials
    axios.post('https://plant-shop-production.up.railway.app/userroute/users/login', {
    email:email,
    password:password
    })
    .then(function (response) {
      console.log("hcbb hcchc y eh backend ka",response);

      if(response.status === 200){
        localStorage.setItem('token', response.data.token)
        navigate('/')
      }
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }



  return (
    <div>
      
    < div className='container my-3'  >
    
    <form onSubmit={toLogin}>
    
  
      <div className="mb-3">
        <label htmlFor="email" className="form-label" >Email</label>
        <input type="email" className="form-control" id="email"  name='email'onChange={onChange} aria-describedby="emailHelp"/>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password"  name='password' onChange={onChange} aria-describedby="emailHelp"/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    
    </div>
      
    

    <div className='container'>
      <p>New Customer? <Link to="/signup"> Register</Link> </p>

    </div>
    
        </div>
      )
}

export default Login
