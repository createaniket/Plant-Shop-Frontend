import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';

const Signup = (props) => {

  const [credentials , setCredentials] = useState({name:"" , password:"" , email:""})


  const [done , setDone] = useState("undefined")

  const navigate = useNavigate();


 


  const  onChange = (e)=> {
    setCredentials({ ...credentials , [e.target.name] : e.target.value} )
  }



  const toSignUp = async(e) => {
    e.preventDefault();

    setDone(false)
    const {name , email , password} = credentials
                      await axios.post('https://natureverse.onrender.com/userroute/users', {
                          name:name,
                        email:email,
                        password:password
                        })
                        .then(function (response) {
                          if(response.status === 201){
                            localStorage.setItem('token', response.data.token)
                            localStorage.setItem('personame', response.data.user.name)
                  
                            setDone(true)
                            navigate('/')
                          }
                        })
                        .catch(function (error) {
                    console.log(error)
                        });
  }

  return (


    

<div className='allsignup' style={{height:"78vh"}}>


  {


      !done ? <Loading /> : 
      < div className='container my-3'  >
      
      <form onSubmit={toSignUp}>
      
      <div className="mb-3">
          <label htmlFor="name" className="form-label" >Name</label>
          <input type="text" className="form-control" id="name"  name='name' onChange={onChange} aria-describedby="emailHelp"/>
        </div>
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

  }

    </div>
  )
}

export default Signup
