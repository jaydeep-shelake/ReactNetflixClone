import React from 'react'
import './ProfilePage.css';
import Nav from '../HomeScreen/Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
const ProfilePage = () => {
    const user = useSelector(selectUser)
    return (
        <div className="profilePage">
            <Nav/>
           <div className="profilePageBody">
               <h1>My Profile</h1>
               <div className="profileInfo">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" className="profileAvatar"/>
                   <div className="profileDetail">
                   <h2>{user.email}</h2>
                   <div className="profilePlans">
                       <h3>Plans </h3>
                       <button onClick={()=>auth.signOut()} className="signOut">Sign Out</button>
                   </div>
               </div>
               </div>
               
           </div>
        </div>
    )
}

export default ProfilePage;
