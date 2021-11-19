import React from 'react'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';
function Signup(){
    const history=useHistory();
   
     const [user,setUser]=useState("");
     const [password,setPassword]=useState("");
     const [email, setEmail] = useState("");
     const [phnumber, setPhnumber] = useState("");
     const [confirmpassword, setConfirmpassword] = useState("");
     const [userErr,setUserErr]=useState(false);
     const [emailErr,setEmailErr]=useState(false);
     const [phoneErr,setPhoneErr]=useState(false);
     const [passErr,setPassErr]=useState(false);
     const [confirmpassErr,setConfirmpassErr]=useState(false);
     function signupHandle(e)
     {
         if(user.length<3 || password.length<3)
         {
             alert("PassWord or UserName is not Valid")
         }
         else
         {
             alert("Welcome User You are redirecting to your Profile :)")
         }

         e.preventDefault()
     }
     function userHandler(e){
         let item=e.target.value;
         if(item.length<3 && item.length===0)
         {
            setUserErr(true)
         }
         else
         {
             setUserErr(false)
         }
         setUser(item)
     }
     function passwordHandler(e){
         let item=e.target.value;
         if(item.length<3 && item.length===0)
         {
            setPassErr(true)
         }
         else
         {
             setPassErr(false)
         }
         setPassword(item)

     }
     function emailHandler(e){
         let item=e.target.value;
         if(item.length<3 && item.length===0)
         {
            setEmailErr(true)
         }
         else
         {
             setEmailErr(false)
         }
         setEmail(item)

     }
     function phnumberHandler(e){
         let item=e.target.value;
         if(item.length<3 && item.length===0)
         {
             setPhoneErr(true)
         }
         else
         {
             setPhoneErr(false)
         }
         setPhnumber(item)

     }
     function confirmpasswordHandler(e){
         let item=e.target.value;
         if(item.length<3 && item.length===0)
         {
             setConfirmpassErr(true)
         }
         else
         {
             setConfirmpassErr(false)
         }
         setConfirmpassword(item)

     }












    return (
        <>
            <form className="signupcontainer" onSubmit={signupHandle}>
             <h2>Create your account</h2>
             <div>
             <input type="text" placeholder="Your Name" onChange={userHandler} />
             {userErr?<h3>You have'nt enter any Name or the username is too short  </h3>:""}
             </div>
             <div>
             <input type="email" placeholder="Email"onChange={emailHandler}/>
             {emailErr?<h3>You have'nt enter any Name or the username is too short  </h3>:""}
             </div>
             <div>
             <input type="text" placeholder="Phone Number" onChange={phnumberHandler}/>
             {phoneErr?<h3>You have'nt enter any Name or the username is too short  </h3>:""}
             </div>
             <div>
             <input type="text" placeholder="Password" onChange={passwordHandler}/>
             {passErr?<h3>You have'nt enter any Name or the username is too short  </h3>:""}
             <input type="text" placeholder="Confirm your Password" onChange={confirmpasswordHandler}/>
             {confirmpassErr?<h3>You have'nt enter any Name or the username is too short  </h3>:""}
             </div> 
            {/* <button  className="loginbtn" onClick={()=>{history.push("/")}}>Login</button>
            <h3> Don't have an account Sign up</h3>
            <button  className="signupbtn" onClick={()=>{history.push("/")}}>Login</button> */}
           {!userErr&&!passErr&&!emailErr&&!phoneErr&&!confirmpassErr? <button  className="create" onClick={()=>{history.push("/Profile")}}>Create Your Account</button>:""}
            </form>
       
       </>
    )
}

export default Signup
