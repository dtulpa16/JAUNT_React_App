import { Link } from "react-router-dom";
import React from "react";
import Logout from "./logout";
import './NavBar.css';

const NavBar = ({user}) => {
  return ( 
    <nav className="navigationWrapper">
      <div class="logoWrapper">
      <span class="stylish">n'</span>
      <span class="logo">Chill</span>
  </div>
  <ul class="navigation">
      {user &&
          <React.Fragment>
            <h4>Welcome {user.username}!     </h4>
            <Link to = '/products'>
              <li class="parent" >Products for sale</li>
            </Link> 
            <Link to = '/productsform'>
              <li class="parent">List Item</li>
            </Link>  
            <Link to = '/shopping_cart'>
              <li class="parent">ShoppingCart</li>
            </Link>
            <li><Logout/></li>
            </React.Fragment>
            }
        {!user && 
        <React.Fragment>
          
            <Link to = '/register'>
              <li class="parent" >Register</li>
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