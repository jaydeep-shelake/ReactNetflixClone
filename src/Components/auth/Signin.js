import React ,{useState}from 'react'
import Banner from './Banner';
import SigninPage from '../Main/SigninPage';
import DetailInfo from '../Main/DetailInfo';
import Footer from '../Main/Footer';
import './Signin.css';
const Signin = () => {
    const [signIn,setSignIn]=useState(false);
    return (
        <div className="signin">
            <div className="nav">
            <div className="navContent">
              <img  className="navLogo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo"/>
             <button onClick={()=>setSignIn(true)}>Signin</button>
            </div>
            </div>
            
                {signIn?(
                <Banner>
                    <SigninPage/>
                 </Banner>   
                ):(
                  <>  
              <Banner>      
            <div className="mainTxt">
            <h1>Unlimited movies, TV <br/>shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="loginInput">
                <form >
                <input type="email" placeholder="Email address"/>
                <button className="loginButton" onClick={()=>setSignIn(true)}>GET STARTED</button>
                </form>
            </div>
              </div>
              </Banner>
              <DetailInfo/>
              </>  
         )}
            
            <Footer/>
        </div>
        
    )
}

export default Signin
