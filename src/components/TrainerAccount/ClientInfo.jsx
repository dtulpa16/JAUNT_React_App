import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import ModifyCals from "./ModifyCals";

const ClientInfo = (props) => {
    const[clientInfo,setClientInfo] = useState('')
  
  
    async function getClientInfo(props){
      await axios.get(`http://127.0.0.1:8000/api/auth/${props.id}/`).then(response=>{setClientInfo(response.data)})
    }
    useEffect(()=>{
        getClientInfo(props)
    },[])
  
  
    return ( 
        <table class = "table table-hover">
        <thead>
        <tr>
            <th scope="col">Client</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Height</th>
            <th scope="col">Weight</th>
            <th scope="col">Gender</th>
            <th scope="col">Goal</th>
            <th scope="col">Current Daily Calories</th>
            <th scope="col"></th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr class="table-info">
            <th scope="row">{clientInfo.first_name} {clientInfo.last_name}</th>
            <td scope="row">{clientInfo.email}</td> 
            <td>{clientInfo.age}</td> 
            <td>{clientInfo.height}in.</td> 
            <td>{clientInfo.weight}lbs</td> 
            <td>{clientInfo.gender}</td>
            <td>{clientInfo.goal}</td>
            <td>{clientInfo.calories}</td>
            <td><button type="button" class="btn btn-outline-info">Modify Calories</button></td>
            <td><button type="button" class="btn btn-outline-info">View/Modify Workout</button></td>
         </tr>
         </tbody>
 
</table>
     );
  }
export default ClientInfo  