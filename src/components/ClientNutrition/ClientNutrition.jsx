import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import './ClientNutrition.css'


const ClientNutrition = (props) => {
  const [clientCals, setClientCals] = useState([])
  const [currentUser,setCurrentUser] = useState('')

  useEffect(()=>{
    getCurrentUser()
},[])

async function getCurrentUser(){
  try{
  const jwt =localStorage.getItem('token');
  await axios.get(`http://127.0.0.1:8000/api/auth/${props.user.user_id}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response => {setCurrentUser(response.data)})
  }catch{
    const refreshtoken = localStorage.getItem('refresh');
      let refreshResponse = await axios.post(`http://127.0.0.1:8000/api/auth/login/refresh/`, {refresh: refreshtoken})
    localStorage.setItem('token', refreshResponse.data.access)
    const jwt =localStorage.getItem('token');
  await axios.get(`http://127.0.0.1:8000/api/auth/${props.user.user_id}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response => {setCurrentUser(response.data)})
  }
}

return ( 
  <div class="fadeInDown">
<div className="nutrition">
  {/* {console.log(currentUser)}
  {currentUser.map((element)=><h1>{element.calories}</h1>)} */}
  {console.log(currentUser)}
  
  <h2>Your daily recommended calorie intake is</h2><h1>{currentUser.calories} calories</h1><br/>
  <p>
  <h3>Nutrition Basics 101</h3>
    Simply put, you CANNOT outwork a bad diet. No matter what your fitness goals are, if you stray too far from your recommended caloric intake, you will not achieve your goals.<br/> If you are a new user and have not 
    been contacted by your trainer in regards to a modification to your caloric intake, the displayed recommended daily caloric was calculated from your provided information upon registration(i.e. age, height, weight, gender, and fitness goals).<br/>
    There are countless amounts of apps and websites that you can use to track your calories as you consume them. It is recommended that you use one of these applications during your fitness journey. These are very useful for holding yourself accountable
    when it comes to your diet.
  </p>
</div></div>
);
}

export default ClientNutrition ;