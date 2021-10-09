import { Link } from "react-router-dom";
import React from "react";
import Logout from "../Logout";
import "./NavBar.css";
import { useState, useEffect } from "react";
import axios from "axios";


const NavBar = ({user}) => {
  const [currentUser,setCurrentUser] = useState('')

  useEffect(()=>{
    getCurrentUser()
  },[user])

  async function getCurrentUser(){
    await axios.get(`http://127.0.0.1:8000/api/auth/${user.user_id}/`).then(response => {setCurrentUser(response.data)})
  }

  return ( 
    <nav className="navigationWrapper">
      <div class="logoWrapper">
      <span class="stylish">git</span>
      <span class="logo">Fit</span>
  </div>
  <ul class="navigation">
      {!currentUser.is_employee && user &&
          <React.Fragment>
            {console.log(user)}
            <h4>Welcome {currentUser.username}!     </h4>
            <Link to = '/clientaccount'>
              <li class="parent">My Workouts</li>
            </Link>
            <Link to = '/clientnutrition'>
              <li class="parent">My Nutrition</li>
            </Link> 
            <Link to = '/forums'>
              <li class="parent">Forums</li>
            </Link>  
            <Link to = '/exercises'>
              <li class="parent">Excercises</li>
            </Link>
            <Link to = '/fromtheexperts'>
              <li class="parent">From The Expert</li>
            </Link>
            <li><Logout/></li>
            </React.Fragment>
            }
          {currentUser.is_employee &&
          <React.Fragment>
            {console.log(user)}
            <h4>Welcome {currentUser.username}!     </h4>
            <Link to = '/traineraccount'>
              <li class="parent" >My Clients</li>
            </Link> 
            <Link to = '/forums'>
              <li class="parent">Forums</li>
            </Link>  
            <Link to = '/fromtheexperts'>
              <li class="parent">My Blog</li>
            </Link>
            <li><Logout/></li>
            </React.Fragment>
            }
        {!user && 
        <React.Fragment>
          
            <Link to = '/clientregister'>
              <li class="parent" >Register As Client</li>
            </Link>  
            <Link to = '/Login'>
              <li class="parent">Login</li>
            </Link>
            <Link to = '/choosetrainer'>
              <li class="parent">Trainers</li>
            </Link>
        </React.Fragment>  
        }
        </ul>
    </nav>
   );
}

export default NavBar;