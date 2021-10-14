import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";


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
<div>
  {/* {console.log(currentUser)}
  {currentUser.map((element)=><h1>{element.calories}</h1>)} */}
  {console.log(currentUser)}
  <h1>{currentUser.calories} calories</h1>
</div>
);
}

export default ClientNutrition ;