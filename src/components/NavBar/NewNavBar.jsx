import { Link } from "react-router-dom";
import React from "react";
import Logout from "../Logout";
import { useState, useEffect } from "react";
import axios from "axios";



const NewNavBar = ({user}) => {
  const [currentUser,setCurrentUser] = useState('')

  useEffect(()=>{
    getCurrentUser()
  },[user])

  async function getCurrentUser(){
    await axios.get(`http://127.0.0.1:8000/api/auth/${user.user_id}/`).then(response => {setCurrentUser(response.data)})
  }

  return ( 
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand">Jaunt</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
      {!currentUser.is_employee && user &&
          <React.Fragment>
        <li class="nav-item">
        <Link to ='/home'><a class="nav-link active">Home
            <span class="visually-hidden">(current)</span>
          </a></Link>
        </li>
        <li class="nav-item">
        <Link to ='/clientaccount'><a class="nav-link">My Workouts</a></Link>
        </li>
        <li class="nav-item">
        <Link to ='/clientnutrition'><a class="nav-link">My Nutrition</a></Link>
        </li>
        <li class="nav-item">
        <Link to ='/forums'><a class="nav-link">Forums</a></Link>
        </li>
        <li class="nav-item">
        <Link to ='/fromtheexperts'><a class="nav-link">My Trainer's Blog</a></Link>
        </li>
        <li class = "nav-item"><Logout/></li>
        </React.Fragment>
        }
        {currentUser.is_employee &&
          <React.Fragment>
        <li class="nav-item">
        <Link to ='/home'><a class="nav-link active">Home
            <span class="visually-hidden">(current)</span>
          </a></Link>
        </li>
        <li class="nav-item">
        <Link to ='/traineraccount'><a class="nav-link">My Clients</a></Link>
        </li>
        <li class="nav-item">
        <Link to ='/forums'><a class="nav-link">Forums</a></Link>
        </li>
        <li class="nav-item">
        <Link to ='/fromtheexperts'><a class="nav-link">My Blog</a></Link>
        </li>
        <li class = "nav-item"><Logout/></li>
        </React.Fragment>
        }
        {!user &&
          <React.Fragment>
        <li class="nav-item">
          <Link to ='/login'><a class="nav-link">Login</a></Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Register</a>
          <div class="dropdown-menu">
          <Link to ='/clientregister'><a class="dropdown-item">Register As New Client</a></Link>
          <Link to ='/Login'><a class="dropdown-item">Register As New Trainer</a></Link>
          </div>
        </li>
        </React.Fragment>
        }
      </ul>
    </div>
  </div>
</nav>
   );
}

export default NewNavBar;