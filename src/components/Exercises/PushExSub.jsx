import React from "react";
import './Exercises.css'


const PushExSub = (props) => {
  return ( 
    <div id="demo">
    <div class="wrapper">
        <div class="content">
            <ul>
                <a href="#"><li>Dips</li></a>
                <a href="#"><li>Dumbbell Press</li></a>
                <a href="#"><li>Incline Barbell</li></a>
            </ul>
        </div>
        <div class="parent">Barbell Bench Press</div>
    </div>
    
    <div class="wrapper">
        <div class="content">
            <ul>
                <a href="#"><li>Dumbbell Shoulder Press</li></a>
                <a href="#"><li>Barbell Overhead Press</li></a>
                <a href="#"><li>Arnold Press</li></a>
            </ul>
        </div>
        
        <div class="parent">Shoulder Press Machine</div>
    </div>
    <div class="wrapper">
        <div class="content">
            <ul>
                <a href="#"><li>Machine Flies</li></a>
                <a href="#"><li>Cable Flies</li></a>
                <a href="#"><li>Dumbbell Flies</li></a>
            </ul>
        </div>
        
        <div class="parent">Pec Flies</div>
    </div>
    <div class="wrapper">
        <div class="content">
            <ul>
                <a href="#"><li>Tricep Pushdowns</li></a>
                <a href="#"><li>Skull Crushers</li></a>
                <a href="#"><li>Diamond Pushup</li></a>
            </ul>
        </div>
        
        <div class="parent">Tricep Rope Pushdowns</div>
    </div>
    <div class="wrapper">
        <div class="content">
            <ul>
                <a href="#"><li>Dumbbell Shoulder Press</li></a>
                <a href="#"><li>Arnold Press</li></a>
                <a href="#"><li>Machine Shoulder Press</li></a>
            </ul>
        </div>
        
        <div class="parent">Overhead Press</div>
    </div>
    </div>
   );
}

export default PushExSub ;