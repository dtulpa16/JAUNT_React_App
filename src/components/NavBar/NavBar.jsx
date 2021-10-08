import { Link } from "react-router-dom";
import React from "react";
import Logout from "../Logout";
import "./NavBar.css";


const NavBar = ({user}) => {
  return ( 
    <nav className="navigationWrapper">
      <div class="logoWrapper">
      <span class="stylish">git</span>
      <span class="logo">Fit</span>
  </div>
  <ul class="navigation">
      {user &&
          <React.Fragment>
            <h4>Welcome {user.username}!     </h4>
            <Link to = '/clientaccount'>
              <li class="parent" >Client account</li>
            </Link> 
            <Link to = '/forums'>
              <li class="parent">Forums</li>
            </Link>  
            <Link to = '/exercises'>
              <li class="parent">Excercises</li>
            </Link>
            <Link to = '/fromtheexperts'>
              <li class="parent">From the experts</li>
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

        </React.Fragment>  
        }
        </ul>
    </nav>
   );
}

export default NavBar;