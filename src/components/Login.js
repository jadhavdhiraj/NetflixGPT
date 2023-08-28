import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSigninForm,setIsSigninForm] = useState(true);

    const toggleSigninForm = ()=>{
        setIsSigninForm(!isSigninForm)
    }



  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>

      <form className="w-3/12 my-36 p-12 bg-black absolute mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSigninForm? "Sign In" :"Sign Up"}</h1>
        
        {!isSigninForm &&  <input
          type="text"
          placeholder="Enter Your Name"
          className="p-4 my-4 w-full bg-zinc-800"
        />
        }
        <input
          type="email"
          placeholder="Enter Email"
          className="p-4 my-4 w-full bg-zinc-800"
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-zinc-800"
        />
        <button className="bg-red-700 w-full p-4 my-6 rounded-lg">{isSigninForm? "Sign In" :"Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSigninForm}>{isSigninForm? "New to Netflix? SignUp" :"Already have account? Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
