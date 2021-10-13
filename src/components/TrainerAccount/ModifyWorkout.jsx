import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {Component, Route, Link } from 'react';
import { Redirect } from "react-router";

class ModifyWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            clientWorkout:'',
                notes: "",
                day1ex1: "",
                day1ex1sets: 0,
                day1ex1reps: 0,
                day1ex2: "",
                day1ex2sets: 0,
                day1ex2reps: 0,
                day1ex3: "",
                day1ex3sets: 0,
                day1ex3reps: 0,
                day1ex4: "",
                day1ex4sets: 0,
                day1ex4reps: 0,
                day2ex1: "",
                day2ex1sets: 0,
                day2ex1reps: 0,
                day2ex2: "",
                day2ex2sets: 0,
                day2ex2reps: 0,
                day2ex3: "",
                day2ex3sets: 0,
                day2ex3reps: 0,
                day2ex4: "",
                day2ex4sets: 0,
                day2ex4reps: 0,
                day3ex1: "",
                day3ex1sets: 0,
                day3ex1reps: 0,
                day3ex2: "",
                day3ex2sets: 0,
                day3ex2reps: 0,
                day3ex3: "",
                day3ex3sets: 0,
                day3ex3reps: 0,
                day3ex4: "",
                day3ex4sets: 0,
                day3ex4reps: 0
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
        const jwt =localStorage.getItem('token');
        let response = await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/workout/${this.props.location.state.id}/`, { headers: {Authorization: 'Bearer ' + jwt}})
        this.setState({
            clientWorkout:response.data
        })
        console.log(this.state.clientWorkout)
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
            console.log("API call failed");
        }
        
    }

    render() { 
        return ( 
            
        <div class="card text-white bg-info mb-3">
            {console.log(this.state.clientWorkout)}
            <div class="card-header">Create Workout For {this.props.location.state.name}</div>
            <div class="card-body">
            <h4 class="card-title">{this.props.location.state.name}'s current goal: {this.props.location.state.goal}</h4>
            <div class="form-group">
            <form className= "calories" onSubmit={(event) => this.handleSubmit (event)}>
            <h3>Leg day</h3>
            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Add A Notes</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="text" name = 'notes' id="inputSmall" required value ={this.state.notes}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Exercise 1</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="text" name = 'day1ex1' id="inputSmall" required value ={this.state.day1ex1}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Sets</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day1ex1sets' id="inputSmall" required value ={this.state.day1ex1sets}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Reps</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day1ex1reps' id="inputSmall" required value ={this.state.day1ex1reps}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Exercise 2</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="text" name = 'day1ex2' id="inputSmall" required value ={this.state.day1ex2}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Sets</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day1ex2sets' id="inputSmall" required value ={this.state.day1ex2sets}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Reps</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day1ex2reps' id="inputSmall" required value ={this.state.day1ex2reps}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Exercise 3</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="text" name = 'day1ex3' id="inputSmall" required value ={this.state.day1ex3}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Sets</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day1ex3sets' id="inputSmall" required value ={this.state.day1ex3sets}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Reps</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day1ex3reps' id="inputSmall" required value ={this.state.day1ex3reps}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Exercise 4</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="text" name = 'day1ex4' id="inputSmall" required value ={this.state.day1ex4}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Sets</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day1ex4sets' id="inputSmall" required value ={this.state.day1ex4sets}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Reps</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day1ex4reps' id="inputSmall" required value ={this.state.day1ex4reps}/>

            <h3>Push Day</h3>
            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Exercise 1</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="text" name = 'day2ex1' id="inputSmall" required value ={this.state.day2ex1}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Sets</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day2ex1sets' id="inputSmall" required value ={this.state.day2ex1sets}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Reps</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day2ex1reps' id="inputSmall" required value ={this.state.day2ex1reps}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Exercise 2</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="text" name = 'day2ex2' id="inputSmall" required value ={this.state.day2ex2}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Sets</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day2ex2sets' id="inputSmall" required value ={this.state.day2ex2sets}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Reps</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day2ex2reps' id="inputSmall" required value ={this.state.day2ex2reps}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Exercise 3</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="text" name = 'day2ex3' id="inputSmall" required value ={this.state.day2ex3}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Sets</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day2ex3sets' id="inputSmall" required value ={this.state.day2ex3sets}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Reps</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day2ex3reps' id="inputSmall" required value ={this.state.day2ex3reps}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Exercise 4</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="text" name = 'day2ex4' id="inputSmall" required value ={this.state.day2ex4}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Sets</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day2ex4sets' id="inputSmall" required value ={this.state.day2ex4sets}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Reps</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day2ex4reps' id="inputSmall" required value ={this.state.day2ex4reps}/>

            <h3>Pull Day</h3>
            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Exercise 1</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="text" name = 'day3ex1' id="inputSmall" required value ={this.state.day3ex1}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Sets</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day3ex1sets' id="inputSmall" required value ={this.state.day3ex1sets}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Reps</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day3ex1reps' id="inputSmall" required value ={this.state.day3ex1reps}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Exercise 2</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="text" name = 'day3ex2' id="inputSmall" required value ={this.state.day3ex2}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Sets</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day3ex2sets' id="inputSmall" required value ={this.state.day3ex2sets}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Reps</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day3ex2reps' id="inputSmall" required value ={this.state.day3ex2reps}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Exercise 3</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="text" name = 'day3ex3' id="inputSmall" required value ={this.state.day3ex3}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Sets</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day3ex3sets' id="inputSmall" required value ={this.state.day3ex3sets}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Reps</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day3ex3reps' id="inputSmall" required value ={this.state.day3ex3reps}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Exercise 4</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="text" name = 'day3ex4' id="inputSmall" required value ={this.state.day3ex4}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Sets</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day3ex4sets' id="inputSmall" required value ={this.state.day3ex4sets}/>

            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Reps</label>
            <input onChange={this.handleChange} class="form-control form-control-sm" type="number" name = 'day3ex4reps' id="inputSmall" required value ={this.state.day3ex4reps}/>
            <button type="submit" class="btn btn-outline-info">Submit Workout To Client!</button>
         </form>
        </div>
        </div>
        </div>
         );
    }
}
 
export default ModifyWorkout;