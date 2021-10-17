import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {Component, Route, Link } from 'react';
import { Redirect } from "react-router";
import './CustomWorkout.css'

class ModifyWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            clientWorkout:'',
                notes: "",
                day1ex1: "",
                day1ex1sets: '',
                day1ex1reps: '',
                day1ex2: "",
                day1ex2sets: '',
                day1ex2reps: '',
                day1ex3: "",
                day1ex3sets: '',
                day1ex3reps: '',
                day1ex4: "",
                day1ex4sets: '',
                day1ex4reps: '',
                day2ex1: "",
                day2ex1sets: '',
                day2ex1reps: '',
                day2ex2: "",
                day2ex2sets: '',
                day2ex2reps: '',
                day2ex3: "",
                day2ex3sets: '',
                day2ex3reps: '',
                day2ex4: "",
                day2ex4sets: '',
                day2ex4reps: '',
                day3ex1: "",
                day3ex1sets: '',
                day3ex1reps: '',
                day3ex2: "",
                day3ex2sets: '',
                day3ex2reps: '',
                day3ex3: "",
                day3ex3sets: '',
                day3ex3reps: '',
                day3ex4: "",
                day3ex4sets: '',
                day3ex4reps: ''
         }
    }

    componentDidMount(){
        this.getWorkout()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.type === "number"? event.target.valueAsNumber : event.target.value
        });
    }

    async getWorkout(){
        try{
        const jwt =localStorage.getItem('token');
        let response = await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/workout/${this.props.location.state.id}/`, { headers: {Authorization: 'Bearer ' + jwt}})
        this.setState({
            clientWorkout:response.data
        })
        console.log(this.state.clientWorkout)
        }catch{
            const refreshtoken = localStorage.getItem('refresh');
            let refreshResponse = await axios.post(`http://127.0.0.1:8000/api/auth/login/refresh/`, {refresh: refreshtoken})
            localStorage.setItem('token', refreshResponse.data.access)
            const jwt =localStorage.getItem('token');
            let response = await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/workout/${this.props.location.state.id}/`, { headers: {Authorization: 'Bearer ' + jwt}})
        this.setState({
            clientWorkout:response.data
        })
        }
    }

    handleSubmit =(event)=>{
        event.preventDefault()
        let newWorkout = {
            id:this.state.clientWorkout[0].id,
            user:this.props.location.state.id,
            notes:this.state.notes,
            day1ex1:this.state.day1ex1,
            day1ex1sets:this.state.day1ex1sets,
            day1ex1reps:this.state.day1ex1reps,
            day1ex2:this.state.day1ex2,
            day1ex2sets:this.state.day1ex2sets,
            day1ex2reps:this.state.day1ex2reps,
            day1ex3:this.state.day1ex3,
            day1ex3sets:this.state.day1ex3sets,
            day1ex3reps:this.state.day1ex3reps,
            day1ex4:this.state.day1ex4,
            day1ex4sets:this.state.day1ex4sets,
            day1ex4reps:this.state.day1ex4reps,
            day2ex1:this.state.day2ex1,
            day2ex1sets:this.state.day2ex1sets,
            day2ex1reps:this.state.day2ex1reps,
            day2ex2:this.state.day2ex2,
            day2ex2reps:this.state.day2ex2reps,
            day2ex2sets:this.state.day2ex2sets,
            day2ex3:this.state.day2ex3,
            day2ex3sets:this.state.day2ex3sets,
            day2ex3reps:this.state.day2ex3reps,
            day2ex4:this.state.day2ex4,
            day2ex4sets:this.state.day2ex4sets,
            day2ex4reps:this.state.day2ex4reps,
            day3ex1:this.state.day3ex1,
            day3ex1sets:this.state.day3ex1sets,
            day3ex1reps:this.state.day3ex1reps,
            day3ex2:this.state.day3ex2,
            day3ex2reps:this.state.day3ex2reps,
            day3ex2sets:this.state.day3ex2sets,
            day3ex3:this.state.day3ex3,
            day3ex3sets:this.state.day3ex3sets,
            day3ex3reps:this.state.day3ex3reps,
            day3ex4:this.state.day3ex4,
            day3ex4sets:this.state.day3ex4sets,
            day3ex4reps:this.state.day3ex4reps
        }
        this.updateWorkout(newWorkout)
    }

    async updateWorkout(workout) {
        try {
            const jwt =localStorage.getItem('token');
            let response = await axios.put(`http://127.0.0.1:8000/api/applicationFunctions/workout/${this.state.clientWorkout[0].id}/`, workout, { headers: {Authorization: 'Bearer ' + jwt}})
            
        } catch (ex) {
            const refreshtoken = localStorage.getItem('refresh');
      let refreshResponse = await axios.post(`http://127.0.0.1:8000/api/auth/login/refresh/`, {refresh: refreshtoken})
      localStorage.setItem('token', refreshResponse.data.access)
      const jwt =localStorage.getItem('token');
            let response = await axios.put(`http://127.0.0.1:8000/api/applicationFunctions/workout/${this.state.clientWorkout[0].id}/`, workout, { headers: {Authorization: 'Bearer ' + jwt}})
        }
        alert('Workout Submitted!')
    }
//     <div class="regwrapper regfadeInDown">
//     <div id="registerContent">

//    <div class="regfadeIn first">
//    <img src="https://static.vecteezy.com/system/resources/thumbnails/003/285/077/small/alphabet-letter-logo-icon-for-business-and-company-creative-template-vector.jpg" width="30%" height="70%" />
//    </div>

    render() { 
        return ( 
            
            <div class="container">
            <div class="workout-middle-wrapper workoutfadeInDown">
            <div id="workoutContent">
            <img src="https://thumbs.dreamstime.com/b/dumbbell-icon-isolated-black-background-simple-vector-dumbbell-icon-isolated-black-background-156664028.jpg" width="5%" height="10%" />

            <div class="workoutfadeIn first">
            <h5>{this.props.location.state.name}'s current goal: {this.props.location.state.goal}</h5>
            </div>

            <form className= "calories" onSubmit={(event) => this.handleSubmit (event)}>
            <div class="row">
            <div class="col-md-4">
            <label id="workoutlabel">Leg day</label>

            <input onChange={this.handleChange}  type="text" name = 'day1ex1' placeholder="Exercise 1" required value ={this.state.day1ex1}/>

            <input onChange={this.handleChange}  type="number" name = 'day1ex1sets' placeholder="Sets" required value ={this.state.day1ex1sets}/>

            <input onChange={this.handleChange}  type="number" name = 'day1ex1reps' placeholder="Reps" required value ={this.state.day1ex1reps}/>

            <input onChange={this.handleChange}  type="text" name = 'day1ex2' placeholder="Exercise 2" required value ={this.state.day1ex2}/>

            <input onChange={this.handleChange}  type="number" name = 'day1ex2sets' placeholder="Sets" required value ={this.state.day1ex2sets}/>

            <input onChange={this.handleChange}  type="number" name = 'day1ex2reps' placeholder="Reps" required value ={this.state.day1ex2reps}/>

            <input onChange={this.handleChange}  type="text" name = 'day1ex3' placeholder="Exercise 3" required value ={this.state.day1ex3}/>

            <input onChange={this.handleChange}  type="number" name = 'day1ex3sets' placeholder="Sets" required value ={this.state.day1ex3sets}/>

            <input onChange={this.handleChange}  type="number" name = 'day1ex3reps' placeholder="Reps" required value ={this.state.day1ex3reps}/>

            <input onChange={this.handleChange}  type="text" name = 'day1ex4' placeholder="Exercise 4" required value ={this.state.day1ex4}/>

            <input onChange={this.handleChange}  type="number" name = 'day1ex4sets' placeholder="Sets" required value ={this.state.day1ex4sets}/>

            <input onChange={this.handleChange}  type="number" name = 'day1ex4reps' placeholder="Reps" required value ={this.state.day1ex4reps}/>
            </div>
            <div class="col-md-4">
            <lable id="workoutlabel">Push Day</lable>
            <input onChange={this.handleChange}  type="text" name = 'day2ex1' placeholder="Exercise 1" required value ={this.state.day2ex1}/>

            <input onChange={this.handleChange}  type="number" name = 'day2ex1sets' placeholder="Sets" required value ={this.state.day2ex1sets}/>

            <input onChange={this.handleChange}  type="number" name = 'day2ex1reps' placeholder="Reps" required value ={this.state.day2ex1reps}/>

            <input onChange={this.handleChange}  type="text" name = 'day2ex2' placeholder="Exercise 2" required value ={this.state.day2ex2}/>

            <input onChange={this.handleChange}  type="number" name = 'day2ex2sets' placeholder="Sets" required value ={this.state.day2ex2sets}/>

            <input onChange={this.handleChange}  type="number" name = 'day2ex2reps' placeholder="Reps" required value ={this.state.day2ex2reps}/>

            <input onChange={this.handleChange}  type="text" name = 'day2ex3' placeholder="Exercise 3" required value ={this.state.day2ex3}/>

            <input onChange={this.handleChange}  type="number" name = 'day2ex3sets' placeholder="Add a Note" required value ={this.state.day2ex3sets}/>

            <input onChange={this.handleChange}  type="number" name = 'day2ex3reps' placeholder="Sets" required value ={this.state.day2ex3reps}/>

            <input onChange={this.handleChange}  type="text" name = 'day2ex4' placeholder="Exercise 4" required value ={this.state.day2ex4}/>

            <input onChange={this.handleChange}  type="number" name = 'day2ex4sets' placeholder="Sets" required value ={this.state.day2ex4sets}/>

            <input onChange={this.handleChange}  type="number" name = 'day2ex4reps' placeholder="Reps" required value ={this.state.day2ex4reps}/>
            </div>
            <div class="col-md-4">
            <lable id="workoutlabel">Pull Day</lable>
            <input onChange={this.handleChange}  type="text" name = 'day3ex1' placeholder="Exercise 1" required value ={this.state.day3ex1}/>

            <input onChange={this.handleChange}  type="number" name = 'day3ex1sets' placeholder="Sets" required value ={this.state.day3ex1sets}/>

            <input onChange={this.handleChange}  type="number" name = 'day3ex1reps' placeholder="Reps" required value ={this.state.day3ex1reps}/>

            <input onChange={this.handleChange}  type="text" name = 'day3ex2' placeholder="Exercise 2" required value ={this.state.day3ex2}/>

            <input onChange={this.handleChange}  type="number" name = 'day3ex2sets' placeholder="Sets" required value ={this.state.day3ex2sets}/>

            <input onChange={this.handleChange}  type="number" name = 'day3ex2reps' placeholder="Reps" required value ={this.state.day3ex2reps}/>

            <input onChange={this.handleChange}  type="text" name = 'day3ex3' placeholder="Exercise 3" required value ={this.state.day3ex3}/>

            <input onChange={this.handleChange}  type="number" name = 'day3ex3sets' placeholder="Sets" required value ={this.state.day3ex3sets}/>

            <input onChange={this.handleChange}  type="number" name = 'day3ex3reps' placeholder="Reps" required value ={this.state.day3ex3reps}/>

            <input onChange={this.handleChange}  type="text" name = 'day3ex4' placeholder="Exercise 4" required value ={this.state.day3ex4}/>

            <input onChange={this.handleChange}  type="number" name = 'day3ex4sets' placeholder="Sets" required value ={this.state.day3ex4sets}/>

            <input onChange={this.handleChange}  type="number" name = 'day3ex4reps' placeholder="Reps" required value ={this.state.day3ex4reps}/><br/>
            </div>
         </div>
        <input onChange={this.handleChange} type="text" name = 'notes' placeholder="Add a Note" required value ={this.state.notes}/>
            <input  type = "submit" class="workoutfadeIn fourth" value="Submit Workout"/>
         </form>   
         </div>
    </div>
    </div>
         );
    }
}
 
export default ModifyWorkout;