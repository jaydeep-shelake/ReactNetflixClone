import React, { useEffect } from 'react';
import {BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import Signin from './Components/auth/Signin';
import {auth} from './firebase';
import {logout,login,selectUser} from './features/userSlice';
import ProfilePage from './Components/Main/ProfilePage';
const App = () => {
     console.log(selectUser);
     const user = useSelector(selectUser);
     const dispatch = useDispatch();

    useEffect(()=>{
        // listen to any authentication change
      const unsubscribe=auth.onAuthStateChanged((userAuth)=>{
          if(userAuth){
            //user has been logedin
            console.log(userAuth);
            dispatch(login({
              uid:userAuth.uid,
              email:userAuth.email
            }));
            console.log('user is login');
          }
          else{
            //user has been logedout
            dispatch(logout());
            console.log('user is logout');
          }
        });
        return unsubscribe;
    },[dispatch]);

    return (
        <div>
        <Router>
          { !user ?(
               <Signin/>
          ):(
           <Switch>
             <Route  path="/profile">
                <ProfilePage/>
             </Route>
             <Route exact path="/">
                <HomeScreen/>
             </Route>
                       
             </Switch>
           
           ) }
          </Router>
        </div>
    )
}

export default App
