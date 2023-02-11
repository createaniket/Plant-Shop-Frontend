import React from 'react'
import aniketimage from '../Assets/aniketbestpic.jpeg'
const About = () => {
  return (
    <div className='container' style={{height:"80vh" , display:"flex", justifyContent:"center"}}>
      
      <div className="card my-4" style={{width: "37vw"}}>
  <img src={aniketimage} className="card-img-top" alt="..." style={{height:"46vh" , width:"27vw" }}/>
  <div className="card-body">
    <h5 className="card-title">About Me</h5>
    <h6>Hello , I am Aniket Pratap Singh <strong> "(MERN Developer)"</strong> </h6>
    <p className="card-text">The creator owner and designer of this fully functioning Plant App</p>
    <p> <strong> <bold> Thanks for visting here! any advice and suggestion are highly welcome!</bold></strong></p>
    <p> aniketpratapsingh19@gmail.com</p>
       
        <a href="https://www.linkedin.com/in/aniket-pratap-singh-28669b193/" classname="btn btn-primary">LinkedIn Profile</a>
  </div>
</div>
    </div>
  )
}

export default About
