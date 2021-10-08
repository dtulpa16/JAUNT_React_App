import axios from 'axios';
import React from 'react';

// this hook adds/posts the user review
const CreateWorkout = (props) => {

    const userWorkout = () => {
        if(props.experience == 1){
            let payload = {
                "user": props.id,
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
                "day2ex4": "Tricep rope pushdown(cable)",
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
            postWorkout(payload)
        }
    }

    async function postWorkout(payload) {
        let response = await axios.post(`http://127.0.0.1:8000/api/applicationFunctions/workout/${payload}`);
        
        if (response) {
            console.log("good api call");
        }
        else {
            console.log("bad api call");
        }
    }
    // call the axios function
}

export default CreateWorkout;