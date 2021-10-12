import axios from 'axios';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'



const Login = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const user = {};

    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser(username,password)

    }

    async function loginUser(login,pass){
      let payload = {username: login, password:pass}
      let response = await axios.post(`http://127.0.0.1:8000/api/auth/login/`, payload)
      console.log(response.data)
      localStorage.setItem('token', response.data.access);
      window.location = '/home';
      //resets form
      setUserName('');
      setPassword('');
      return localStorage;
    }

  
    return (
        <div class="wrapper fadeInDown">
         <div id="formContent">

        <div class="fadeIn first">
        <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
        </div>
        <form onSubmit ={handleSubmit}>
        <input type="text" id="login" class="fadeIn second" name="username" value={username} placeholder="Username" onChange={(event) => setUserName(event.target.value)}/>
        <input type="text" id="password" class="fadeIn third" name="password"  value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
        <input type="submit" class="fadeIn fourth" value="Log In"/>
    </form>
  </div>
</div>

            // <form onSubmit={handleSubmit}>
            //     <input type="text" name="username" placeholder="Username" value={username} onChange={(event) => setUserName(event.target.value)} />
            //     <input name="password" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
            //     <input type="submit" value="Login" class="btn btn-primary" />
            // </form>

    )
}


export default Login ;