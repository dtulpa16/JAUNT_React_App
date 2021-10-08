import {Switch, Route} from 'react-router-dom';
import { Redirect } from 'react-router';
import React, {Component} from "react";
import axios from "axios";
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwtDecode from 'jwt-decode';
import ClientRegister from './ClientRegister/ClientRegister';
import ClientAccount from './ClientAccount/ClientAccount';
import Excercises from './Exercises/Exercises';
import Forums from './Forums/Forums';
import FromTheExperts from './FromTheExperts/FromTheExperts';
import Home from './Home/Home';
import Login from './Login/Login';
import NavBar from './NavBar/NavBar';
import TrainerAccount from './TrainerAccount/TrainerAccount';
import TrainerRegister from './TrainerRegister/TrainerRegister';




class App extends Component{
    state = {
        user: ''
    }

//Establishes what methods/functions will be ran when the page is launched
     componentDidMount() {
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({user});
        }catch{

        }
    }

    
// Establish url enpoints to get to a certain page vvv
render(){
    const user = this.state.user;
        return(
            <div className = "App">
            <NavBar className="navbar" user = {user}/>   
            <Switch>
                <Route
                path ='/home'
                render = {props => {
                    if (!user){
                        return <Redirect to ="/login"/>
                    }else{
                        return <Home {...props} user = {user} />
                    }
                }}
                />
                <Route path="/forums" component={Forums}/>
                <Route path="/clientaccount" component={ClientAccount}/>
                <Route path="/clientregister" component={ClientRegister}/>
                <Route path="/exercises" component={Excercises}/>
                <Route path="/fromtheexperts" component={FromTheExperts}/>
                <Route path="/home" component={Home}/>
                <Route path="/login" component = {Login}/>
                <Route path="/traineraccount" component={TrainerAccount}/>
                <Route path="/trainerregister" component={TrainerRegister}/>
            </Switch>
        </div>
        )
    }
}
export default App;
