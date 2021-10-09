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
  await axios.get(`http://127.0.0.1:8000/api/auth/${props.user.user_id}/`).then(response => {setCurrentUser(response.data)})
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