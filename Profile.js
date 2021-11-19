import React from 'react'
import { useRef, useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import '../App.css';
import placeholder from './placeholder.PNG';
const Profile = () => {
  // const state={
  //   profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  // }


  const history=useHistory();
  const [{alt, src}, setImg] = useState({
    src: placeholder,
    alt: 'Upload an Image'
});

const handleImg = (e) => {
    if(e.target.files[0]) {
        setImg({
            src: URL.createObjectURL(e.target.files[0]),
            alt: e.target.files[0].name
        });    
    }   
}
    return (
        <div>
            <div className="navbar">
            
    Hey User Welcome to Your Own Profile
    <button onClick={()=>{history.push("/")}}>Logout</button>
</div>
             <form encType="multipart/form-data">
            
            <div className="form__img-input-container">
                <input 
                    type="file" 
                    accept=".png, .jpg, .jpeg" 
                    id="photo" 
                    className="visually-hidden"
                    onChange={handleImg}
                />
                <label htmlFor="photo" className="form-img__file-label">
                    <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="#56ceef" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                         <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                         <circle cx="12" cy="10" r="3" />
                        <circle cx="12" cy="12" r="10" />  
                    </svg>
                 
                </label>
                
                <img src={src} alt={alt} className="form-img__img-preview"/>
                <h2 className="imgchoose">Choose Your Photo Here</h2>
            </div>
        </form>
        <div className="profdesc">
       <div>
       <input type="text" placeholder="Name"/>
       <input type="text" placeholder="date of birth"/>
       <input type="text" placeholder="religion"/>
       <input type="text" placeholder="height"/>
       <button className="profsubmit">SUBMIT</button>
       </div>
       <h1>Please Complete Your Profile By Filling</h1>
   </div>
{/* <div className="navbar">
    <h2>Hey User Welcome to Your Own Profile</h2>
</div>
<div>
   <div className="profimg">
       <div className="profimg1"> </div>
       








   </div>
   <div className="profdesc">
       <div>
       <input type="text" placeholder="Name"/>
       <input type="text" placeholder="date of birth"/>
       <input type="text" placeholder="religion"/>
       <input type="text" placeholder="height"/>
       </div>
   </div>
   </div>



  




            <button onClick={()=>{history.push("/Login")}}>Logout</button> */}
        </div>
    )
    }

export default Profile
  
