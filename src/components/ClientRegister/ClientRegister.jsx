import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CreateWorkout from "../../Hooks/CreateWorkout";
import {Component, Route, Link } from 'react';


class ClientRegister extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            email: '',
            firstname: '',
            lastname: '',
            isemployee: false,
            age: 0,
            goal: '',
            height: 0,
            weight: 0,
            gender: '',
            experience: 0,
            password: '',
            password2: '',
            calories: 0,
         }
    }

    // const [username,setUsername] = useState([''])
    // const [email,setEmail] = useState([''])
    // const [firstname,setFirstname] = useState([''])
    // const [lastname,setLastname] = useState([''])
    // const [isemployee,setIsemployee] = useState(false)
    // const [age,setAge] = useState(0)
    // const [goal,setGoal] = useState([''])
    // const [height,setHeight] = useState(0)
    // const [weight,setWeight] = useState(0)
    // const [gender,setGender] = useState([''])
    // const [experience,setExperience] = useState([''])
    // const [password,setPassword] = useState([''])
    // const [calorie,setCalories] = useState(0)

    componentDidMount(){
        this.getUser()
    }
    async getUser(){
        let response = await axios.get(`http://127.0.0.1:8000/api/auth/1/`).then(response => {console.log(response.data)})
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
        this.getBmr()
        let newClient = {
            "username": this.state.username,
            "password": this.state.password,
            "password2": this.state.password2,
            "email": this.state.email,
            "first_name": this.state.firstname,
            "last_name": this.state.lastname,
            "is_employee": this.state.isemployee,
            "age": this.state.age,
            "calories": this.state.calorie,
            "goal": this.state.goal,
            "height": this.state.height,
            "weight": this.state.weight,
            "gender": this.state.gender,
            "experience": this.state.experience
        }
        this.registerClient(newClient)
    }

    async registerClient(client) {
        try {
            let response = await axios.post(`http://127.0.0.1:8000/api/auth/register/`, client).then(response => {this.userWorkout(response.data.id, response.data.experience)})
            
        } catch (ex) {
            console.log("API call failed");
        }
        
    }

    getBmr = () => {
        if(this.state.gender == "male"){
            let clientBmr = parseInt((66 + (6.23 * this.state.weight) + (12.7 * this.state.height) - (6.8 * this.state.age)) * 1.44)
            this.getCalories(clientBmr)
        }else if(this.state.gender == "female"){
            let clientBmr = parseInt((655 + (4.35 * this.state.weight) + (4.7 * this.state.height) - (4.7 * this.state.age)) * 1.44)
            this.getCalories(clientBmr)
        }
    }

    getCalories = (bmr) =>{
        if(this.state.goal == "weight loss"){
            let clientCalories = parseInt(bmr - 350)
            this.state.calorie = clientCalories
        }else if(this.state.goal == "weight gain"){
            let clientCalories = parseInt(bmr + 350)
            this.state.calorie = clientCalories
        }
        return
    }

    userWorkout = (id,experience) => {
        if(experience == 1){
            let payload = {
                "user": id,
                "notes": "No notes",
                "day1ex1": "Barbell Squat",
                "day1ex1sets": 3,
                "day1ex1reps": 15,
                "day1ex2": "Leg press machine",
                "day1ex2reps": 3,
                "day1ex2sets": 12,
                "day1ex3": "Calf Machine",
                "day1ex3sets": 3,
                "day1ex3reps": 20,
                "day1ex4": "Leg Curl Machine",
                "day1ex4sets": 3,
                "day1ex4reps": 10,
                "day2ex1": "Chest Press Machine",
                "day2ex1sets": 3,
                "day2ex1reps": 12,
                "day2ex2": "Shoulder Press Machine",
                "day2ex2reps": 3,
                "day2ex2sets": 15,
                "day2ex3": "Dumbbell Side Raise",
                "day2ex3sets": 3,
                "day2ex3reps": 20,
                "day2ex4": "Tricep rope pushdown",
                "day2ex4sets": 3,
                "day2ex4reps": 15,
                "day3ex1": "Pullup",
                "day3ex1sets": 3,
                "day3ex1reps": 6,
                "day3ex2": "Dumbbell row",
                "day3ex2reps": 3,
                "day3ex2sets": 12,
                "day3ex3": "Lat pulldown",
                "day3ex3sets": 3,
                "day3ex3reps": 15,
                "day3ex4": "Bicep Curls",
                "day3ex4sets": 2,
                "day3ex4reps": 25
            }
            this.postWorkout(payload)
        }
    }

    async postWorkout(payload) {
        let response = await axios.post(`http://127.0.0.1:8000/api/applicationFunctions/workout/`, payload);
        
        if (response) {
            console.log("good api call");
        }
        else {
            console.log("bad api call");
        }
    }


render(){
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
                <label>Height (In Inches)</label>
                <input name= "height" type = 'number' onChange={this.handleChange} value={this.state.height}/>
                <label>Weight (In Pounds)</label>
                <input name= "weight" type = 'number' onChange={this.handleChange} value={this.state.weight}/>
                <label>Gender</label>
                <select id="gender" name = "gender" onChange={this.handleOnChange}>
                    <option> </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <label>Experience Level</label>
                <select id="experience" name="experience" type = "number"  onChange={this.handleChange}>
                    <option> </option>
                    <option value="1">Beginner</option>
                    <option value="2">Intermediate</option>
                    <option value="3">Expert</option>
                </select>
                <label>Fitness Goal</label>
                <select id="goal" name="goal"  onChange={this.handleChange}>
                    <option> </option>
                    <option value="weight loss">Weight Loss</option>
                    <option value="weight gain">Weight Gain</option>
                </select>
                <button type = "submit">Register!</button>
            </form> 
        </React.Fragment>
   );
  }
}

export default ClientRegister ;