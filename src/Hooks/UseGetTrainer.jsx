import React, { useEffect, useState }from 'react';
import axios from 'axios';



const UseGetTrainer = (client) =>{
    const [trainer, setTrainer] = useState()

    useEffect(()=>{
        getClientsTrainer(client)
    },[])

    async function getClientsTrainer(user){
        try{
        const jwt =localStorage.getItem('token');
          await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/trainer/${user}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response=>{setTrainer(response.data)});
        }catch{
          let newRefresh = localStorage.getItem('refresh');
        let refreshResponse = await axios.post(`http://127.0.0.1:8000/api/auth/login/refresh/`, {refresh:newRefresh})
        localStorage.setItem('token', refreshResponse.data.access)
        const jwt =localStorage.getItem('token');
          await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/trainer/${user}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response=>{setTrainer(response.data)});
        }
      }

    return(<div>{trainer.map((element)=>element.trainer)}</div>)
}
export default UseGetTrainer