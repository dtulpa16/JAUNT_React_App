import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CreateWorkout from "../../Hooks/CreateWorkout";
import {Component, Route, Link } from 'react';
import { Redirect } from "react-router";
import './TrainerRegister.css'


class TrainerRegister extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            email: '',
            firstname: '',
            lastname: '',
            isemployee: true,
            age: '',
            goal: 'n/a',
            height: 99,
            weight: 99,
            gender: '',
            experience: 0,
            password: '',
            password2: '',
            calories: 3000,
            isRegistered:false,
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.type === "number"? event.target.valueAsNumber : event.target.value
        });
    }
    handleOnChange = (event) => {
        this.setState({
            gender:event.target.value
        });
    }

    handleSubmit =(event)=>{
        event.preventDefault()
        let newTrainer = {
            "username": this.state.username,
            "password": this.state.password,
            "password2": this.state.password2,
            "email": this.state.email,
            "first_name": this.state.firstname,
            "last_name": this.state.lastname,
            "is_employee": this.state.isemployee,
            "age": this.state.age,
            "calories": this.state.calories,
            "goal": this.state.goal,
            "height": this.state.height,
            "weight": this.state.weight,
            "gender": this.state.gender,
            "experience": this.state.experience
        }
        this.registerEmployee(newTrainer)
    }

    async registerEmployee(trainer) {
        try {
            let response = await axios.post(`http://127.0.0.1:8000/api/auth/register/`, trainer)
          this.setState({
            isRegistered:true
        })  
        } catch (ex) {
            console.log("API call failed");
        }
        
    }




render(){
    if (this.state.isRegistered) {
        // redirect to home if signed up
        return <Redirect to = {{ pathname: "/login",state:{ id :this.state.userId} }} />;
      }
  return ( 
    <div class="trainerregwrapper regfadeInDown">
    <div id="trainerregisterContent">

   <div class="regfadeIn first">
   <img src="https://static.vecteezy.com/system/resources/thumbnails/003/285/077/small/alphabet-letter-logo-icon-for-business-and-company-creative-template-vector.jpg" width="30%" height="70%" />
   </div>
            <form className= "register" onSubmit={(event) => this.handleSubmit (event)}>
                <input id ='trainerreginput' placeholder="First Name" type = 'text' name= "firstname" onChange={this.handleChange} value={this.state.firstname}/>
                <input id ='trainerreginput' placeholder="Last Name" type = 'text' name= "lastname" onChange={this.handleChange} value={this.state.lastname}/>
                <input id ='trainerreginput' placeholder="Email" name= "email"type = 'email' onChange={this.handleChange} value={this.state.email}/>
                <input id ='trainerreginput' type='text'name= "username" placeholder="Username" onChange={this.handleChange} value={this.state.username}/>
                <input id ='trainerreginput' type = "password"placeholder="Password" name= "password" onChange={this.handleChange} value={this.state.password}/>
                <input id ='trainerreginput' type = "password" name= "password2" placeholder="Re-Enter Password"onChange={this.handleChange} value={this.state.password2}/>
                <input id ='trainerreginput' name= "age" type = 'number' placeholder="Age"onChange={this.handleChange} value={this.state.age}/>
                <br/><label id='label'>Gender</label>
                <select id="gender" name = "gender" onChange={this.handleOnChange}>
                    <option> </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select><br/>
                <input type = "submit" class="fadeIn fourth" value="Register"/>
            </form> 
            </div>
    </div>
   );
  }
}

export default TrainerRegister ;