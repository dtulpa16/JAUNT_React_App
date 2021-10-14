import React, {useEffect, useState, Component} from "react";
import axios from "axios";

const ReviewCreater = (props) => {
    const [replier, setReplier] = useState('')

    async function getPoster(){
        try{
        const jwt =localStorage.getItem('token');
        await axios.get(`http://127.0.0.1:8000/api/auth/${props.user}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response => {setReplier(response.data)})
    }catch{
        const refreshtoken = localStorage.getItem('refresh');
      let refreshResponse = await axios.post(`http://127.0.0.1:8000/api/auth/login/refresh/`, {refresh: refreshtoken})
      localStorage.setItem('token', refreshResponse.data.access)
      const jwt =localStorage.getItem('token');
        await axios.get(`http://127.0.0.1:8000/api/auth/${props.user}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response => {setReplier(response.data)})
    }
      }
//First thing to run will be a function that will fetch the written reviews of each product based on the id. 
//Props is being passed in from the products list page.
    useEffect(()=>{
        getPoster()
    },[])


    return ( 
        <div>  
        User: {replier.username} {replier.is_employee && <span class="badge rounded-pill bg-success">Trainer</span>}
        </div>
     );
}
export default ReviewCreater;