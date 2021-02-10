import React ,{useRef}from 'react';
import {auth} from '../../firebase';

const SigninPage = () => {
   const emailRef = useRef(null);
   const passwordRef = useRef(null);

   const register=async(e)=>{
      e.preventDefault();
    try {
        const user=await auth.createUserWithEmailAndPassword(
           emailRef.current.value,
           passwordRef.current.value
        ); 
  console.log(user);
    } catch (error) {
        alert(error);
    }
       

   }
   const signin =async(e)=>{
    e.preventDefault();
    try {
        const user = await auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        console.log(user);
    } catch (error) {
        alert(error);
    }
   }

    return (
        <div className="signinPage">
            <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="text" placeholder="Email"/>
            <input ref={passwordRef} type="password" placeholder="Password"/>
            <button onClick={signin}>Sign In</button>
            <h4>New to Netflix? <span style={{color:'#fff'}} onClick={register} >Sign up now</span></h4>
            </form>
        </div>
    )
}

export default SigninPage
