import ClientInfo from "./ClientInfo";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const TrainerAccount = ({user}) => {
  const[clients,setClients] = useState([])

  useEffect(()=>{
    getClientId()
  },[])

  async function getClientId(){
    const jwt =localStorage.getItem('token');
    await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/clients/${user.user_id}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response=>{setClients(response.data)})
  }


  return ( 
    <React.Fragment>

         
        <td data-th="Movie Title">{clients.map((element)=><ClientInfo id = {element.client}/>)}</td>

    </React.Fragment>
   );
}



export default TrainerAccount ;