import React from "react";
import './Exercises.css'


const PullExSub = (props) => {
  return ( 
    <div id="demo">
    <div class="wrapper">
        <div class="content">
            <ul>
                <a href="#"><li>Pullup</li></a>
                <a href="#"><li>V-Grip Pulldown</li></a>
                <a href="#"><li>Chin-Up</li></a>
            </ul>
        </div>
        <div class="parent">Lat Pulldown</div>
    </div>
    
    <div class="wrapper">
        <div class="content">
            <ul>
                <a href="#"><li>Cable Facepulls</li></a>
            </ul>
        </div>
        
        <div class="parent">Reverse Fly</div>
    </div>
    <div class="wrapper">
        <div class="content">
            <ul>
                <a href="#"><li>Dumbbell Curls</li></a>
                <a href="#"><li>EZ Bar Curls</li></a>
                <a href="#"><li>Barbell Curls</li></a>
            </ul>
        </div>
        
        <div class="parent">Bicep Curl Variation</div>
    </div>
    <div class="wrapper">
        <div class="content">
            <ul>
                <a href="#"><li>Lat Pulldown</li></a>
                <a href="#"><li>Chin-up</li></a>
            </ul>
        </div>
        
        <div class="parent">Pullup</div>
    </div>
    <div class="wrapper">
        <div class="content">
            <ul>
                <a href="#"><li>Reverse Flies</li></a>
            </ul>
        </div>
        
        <div class="parent">Facepulls</div>
    </div>
    <div class="wrapper">
        <div class="content">
            <ul>
                <a href="#"><li>Barbell Rows</li></a>
                <a href="#"><li>T-Bar Row</li></a>
                <a href="#"><li>Dumbbell Row</li></a>
            </ul>
        </div>
        
        <div class="parent">Pendlay Rows</div>
    </div>
    </div>
   );
}

export default PullExSub ;