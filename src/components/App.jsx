import "bootswatch/dist/lux/bootstrap.min.css";
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
import ChooseTrainer from './ChooseTrainer/ChooseTrainer';
import ClientNutrition from './ClientNutrition/ClientNutrition';
import DisplayForumPost from './Forums/DisplayForumPost';
import ReviewCreater from './Forums/ReviewCreater';
import ModifyCals from './TrainerAccount/ModifyCals';
import NewNavBar from './NavBar/NewNavBar';
import ModifyWorkout from "./TrainerAccount/ModifyWorkout";
import ReviewTrainer from "./ReviewTrainer/ReviewTrainer";



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
            <NewNavBar className="navbar" user = {user}/>   
            <Switch>
                <Route
                path ='/'
                exact
                render = {props => {
                    if (!user){
                        return <Redirect to ="/login"/>
                    }else{
                        return <Home {...props} user = {user} />
                    }
                }}
                />
                <Route exact path="/home" component={Home}/>
                <Route path="/forums" render = {props=> <Forums {...props} user = {user}/>}/>
                <Route path="/clientaccount" render = {props=> <ClientAccount {...props} user = {this.state.user}/>}/>
                <Route path="/forumposts" render = {props=> <DisplayForumPost {...props} user = {user}/>}/>
                <Route path="/reviewcreater" render = {props=> <ReviewCreater {...props} user = {user}/>}/>
                <Route path="/clientregister" component={ClientRegister}/>
                <Route path="/exercises" component={Excercises}/>
                <Route path="/fromtheexperts" component={FromTheExperts}/>
                <Route path="/home" component={Home}/>
                <Route path="/login" component = {Login}/>
                <Route path="/traineraccount" render = {props=> <TrainerAccount {...props} user = {user}/>}/>
                <Route path="/trainerregister" component={TrainerRegister}/>
                <Route path="/choosetrainer" component={ChooseTrainer}/>
                <Route path="/modifycals" component={ModifyCals}/>
                <Route path="/clientnutrition" render = {props=> <ClientNutrition {...props} user = {this.state.user}/>}/>
                <Route path="/modifyworkout" component ={ModifyWorkout}/>
                <Route path="/reviewtrainer" render = {props=> <ReviewTrainer {...props} user = {this.state.user}/>}/>
            </Switch>
        </div>
        )
    }
}
export default App;
