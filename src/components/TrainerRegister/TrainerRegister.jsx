import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CreateWorkout from "../../Hooks/CreateWorkout";
import {Component, Route, Link } from 'react';
import { Redirect } from "react-router";


class TrainerRegister extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            email: '',
            firstname: '',
            lastname: '',
            isemployee: true,
            age: 0,
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
        return <Redirect to = {{ pathname: "/home",state:{ id :this.state.userId} }} />;
      }
  return ( 
        <React.Fragment>
            <form className= "register" onSubmit={(event) => this.handleSubmit (event)}>
                <label>First Name</label>
                <input name= "firstname" onChange={this.handleChange} value={this.state.firstname}/>
                <label>Last Name</label>
                <input name= "lastname" onChange={this.handleChange} value={this.state.lastname}/>
                <label>Email</label>
                <input name= "email"type = 'email' onChange={this.handleChange} value={this.state.email}/>
                <label>Username</label>
                <input name= "username" onChange={this.handleChange} value={this.state.username}/>
                <label>Password</label>
                <input name= "password" onChange={this.handleChange} value={this.state.password}/>
                <label>Re-enter Password</label>
                <input name= "password2" onChange={this.handleChange} value={this.state.password2}/>
                <label>Age</label>
                <input name= "age" type = 'number' onChange={this.handleChange} value={this.state.age}/>
                <label>Gender</label>
                <select id="gender" name = "gender" onChange={this.handleOnChange}>
                    <option> </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <button type = "submit">Register!</button>
            </form> 
        </React.Fragment>
   );
  }
}

export default TrainerRegister ;