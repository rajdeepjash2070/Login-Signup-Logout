
import React, { useState } from 'react'

 import { useHistory } from 'react-router-dom';
function Login() {



    const history=useHistory();
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
  
    const [userErr,setUserErr]=useState(false);
   
    const [passErr,setPassErr]=useState(false);

  function loginHandle(e)
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
    return (
        <div>
            <div className="container">
            <h2>Login</h2>

           <form onSubmit={loginHandle}>
           <div><input type="text" placeholder="Enter User Id" onChange={userHandler} />{userErr?<h3>You have'nt enter any username or the username is too short  </h3>:""}</div>
            
           <div> <input type="password" placeholder="Enter User Password" onChange={passwordHandler}/>{passErr?<h3>You have'nt enter any Password or the Password is too short </h3>:""}</div>

            
           {!userErr&&!passErr?<button type="submit" className="loginbtn" onClick={()=>{history.push("/Profile")}}>Login</button>:""}
            <h4> Don't have an account Sign up</h4>
          <button  className="signupbtn" onClick={()=>{history.push("/Signup")}}>Signup</button>
           </form>
           </div>
        </div>
    )
}

export default Login;

