import React from "react";
import './Exercises.css'


const Excercises = (props) => {
  return ( 
    <div id="demo">
    <div class="wrapper">
        <div class="content">
            <ul>
                <a href="#"><li>Barbell Front Squat</li></a>
                <a href="#"><li>Leg Press Machine</li></a>
                <a href="#"><li>Dumbbell Goblet Squat</li></a>
            </ul>
        </div>
        <div class="parent">Barbell Back Squat</div>
    </div>
    
    <div class="wrapper">
        <div class="content">
            <ul>
                <a href="#"><li>Barbell Back Squat</li></a>
                <a href="#"><li>Barbell Front Squat</li></a>
                <a href="#"><li>Dumbbell Lunges</li></a>
            </ul>
        </div>
        
        <div class="parent">Leg Press</div>
    </div>
    <div class="wrapper">
        <div class="content">
            <ul>
                <a href="#"><li>Standing Calf Raise</li></a>
                <a href="#"><li>Seated Calf Raise</li></a>
            </ul>
        </div>
        
        <div class="parent">Calf Machine</div>
    </div>
    <div class="wrapper">
        <div class="content">
            <ul>
                <a href="#"><li>Standing Calf Raise</li></a>
                <a href="#"><li>Seated Calf Raise</li></a>
            </ul>
        </div>
        
        <div class="parent">Calf Machine</div>
    </div>
    <div class="wrapper">
        <div class="content">
            <ul>
                <a href="#"><li>Barbell Hip Thrust</li></a>
                <a href="#"><li>Trap Bar Deadlift</li></a>
                <a href="#"><li>Kettlebell Swings</li></a>
            </ul>
        </div>
        
        <div class="parent">Deadlifts</div>
    </div>
    <div class="wrapper">
        <div class="content">
            <ul>
                <a href="#"><li>Cable Pullthrough</li></a>
                <a href="#"><li>Stiff Leg Deadlift</li></a>
                <a href="#"><li>Glute Bridge</li></a>
            </ul>
        </div>
        
        <div class="parent">Dumbbell lunges</div>
    </div>
    <div class="wrapper">
        <div class="content">
            <ul>
                <a href="#"><li>Front Squat</li></a>
                <a href="#"><li>Goblet Squat</li></a>
            </ul>
        </div>
        
        <div class="parent">Leg Extention</div>
    </div>
    </div>
   );
}

export default Excercises ;