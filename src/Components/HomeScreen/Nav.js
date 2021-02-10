import React ,{useState,useEffect}from 'react'
import './Nav.css';
import {Link,useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
const Nav = () => {
    const [showNav,setShowNav]=useState(false);
    const history = useHistory();

    const user = useSelector(selectUser);

    const transistNav = ()=>{
        if(window.scrollY>50){
            setShowNav(true);
        }
        else{
            setShowNav(false);
        }
    }
    
    useEffect(()=>{
       window.addEventListener('scroll',transistNav);
       return ()=>window.removeEventListener('scroll',transistNav);
    },[])
   
    return (
        <div className={`nav ${showNav&&'navBlack'}`}>
            <div className="navContent">
              <img onClick={()=>history.push("/")} className="navLogo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo"/>
             {!user?<button>Signin</button>:<img onClick={()=>history.push('/profile')} src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar"/>}
            </div>
        </div>
    )
}

export default Nav
