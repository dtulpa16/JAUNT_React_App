import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModifyCals from "./ModifyCals";
import './TrainerAccount.css'

const ClientInfo = (props) => {
    const[clientInfo,setClientInfo] = useState('')
  
  
    async function getClientInfo(props){
        try{
        const jwt =localStorage.getItem('token');
      await axios.get(`http://127.0.0.1:8000/api/auth/${props.id}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response=>{setClientInfo(response.data)})
      }catch{
        const refreshtoken = localStorage.getItem('refresh');
        let refreshResponse = await axios.post(`http://127.0.0.1:8000/api/auth/login/refresh/`, {refresh: refreshtoken})
      localStorage.setItem('token', refreshResponse.data.access)
      const jwt =localStorage.getItem('token');
        await axios.get(`http://127.0.0.1:8000/api/auth/${props.id}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response=>{setClientInfo(response.data)})
      }
    }
    useEffect(()=>{
        getClientInfo(props)
    },[])
  
  
    return ( 

        <table className="table-clients">
        <thead>
        <tr className="table-client-contents">
            <th>Client</th>
            <th>Email</th>
            <th>Age</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Gender</th>
            <th>Goal</th>
            <th>Current Daily Calories</th>
            <th></th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        <tr className="table-light">
            <td>{clientInfo.first_name} {clientInfo.last_name}</td>
            <td>{clientInfo.email}</td> 
            
            <td className="cont">{clientInfo.age}</td> 
            <td className="cont">{clientInfo.height}in.</td> 
            <td className="cont">{clientInfo.weight}lbs</td> 
            <td className="cont">{clientInfo.gender}</td>
            <td className="cont">{clientInfo.goal}</td>
            <td className="cont">{clientInfo.calories}</td>
            <td className="cont"><Link to= {{pathname:'/modifycals', state:{id:clientInfo.id, name:clientInfo.first_name, goal:clientInfo.goal}}}><button type="button" class="btn btn-outline-dark">Modify Calories</button></Link></td>
            <td className="cont"><Link to= {{pathname:'/modifyworkout', state:{id:clientInfo.id, name:clientInfo.first_name, goal:clientInfo.goal}}}><button type="button" class="btn btn-outline-dark">Customize Workout</button></Link></td>
         </tr>
         </tbody>
</table>

     );
  }
export default ClientInfo  