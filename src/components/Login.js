import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";



const Login = () => {

    const [isSigninForm,setIsSigninForm] = useState(true);

    const [error,setError] = useState(null)

    const email = useRef(null)
    const password = useRef(null)
   

    const toggleSigninForm = ()=>{
        setIsSigninForm(!isSigninForm)
        setError(null)
    }



const handleSumbit = () =>{

const message = checkValidData(email.current.value,password.current.value)
 
setError(message)

if(message) return;

if(!isSigninForm){
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
      // ..
    });
}
else{

signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage)
  });
}

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

      <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 my-36 p-12 bg-black absolute mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSigninForm? "Sign In" :"Sign Up"}</h1>
        
        {!isSigninForm &&  (<input
       
          type="text"
          placeholder="Enter Your Name"
          className="p-4 my-4 w-full bg-zinc-800"
        />)
        }
        <input
          ref={email}
          type="email"
          placeholder="Enter Email"
          className="p-4 my-4 w-full bg-zinc-800"
        />
        <input
        ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-zinc-800"
        />
        <p className="text-red-500 font-bold py-2 text-lg">{error}</p>
        <button onClick={handleSumbit} className="bg-red-700 w-full p-4 my-6 rounded-lg">{isSigninForm? "Sign In" :"Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSigninForm}>{isSigninForm? "New to Netflix? SignUp" :"Already have account? Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
