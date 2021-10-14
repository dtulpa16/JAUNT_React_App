import ClientInfo from "./ClientInfo";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import './TrainerAccount.css'

const TrainerAccount = ({user}) => {
  const[clients,setClients] = useState([])

  useEffect(()=>{
    getClientId()
  },[])

  async function getClientId(){
    try{
    const jwt =localStorage.getItem('token');
    await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/clients/${user.user_id}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response=>{setClients(response.data)})
    }catch{
      const refreshtoken = localStorage.getItem('refresh');
      let refreshResponse = await axios.post(`http://127.0.0.1:8000/api/auth/login/refresh/`, {refresh: refreshtoken})
      localStorage.setItem('token', refreshResponse.data.access)
      const jwt =localStorage.getItem('token');
    await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/clients/${user.user_id}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response=>{setClients(response.data)})
    }
  }


  return ( 
    <React.Fragment>

         
        <div className='table-align'>{clients.map((element)=><ClientInfo id = {element.client}/>)}</div>

    </React.Fragment>
   );
}



export default TrainerAccount ;