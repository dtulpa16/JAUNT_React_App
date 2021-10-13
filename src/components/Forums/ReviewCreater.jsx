import React, {useEffect, useState, Component} from "react";
import axios from "axios";

const ReviewCreater = (props) => {
    const [replier, setReplier] = useState('')

    async function getPoster(){
        const jwt =localStorage.getItem('token');
        await axios.get(`http://127.0.0.1:8000/api/auth/${props.user}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response => {setReplier(response.data)})
      }
//First thing to run will be a function that will fetch the written reviews of each product based on the id. 
//Props is being passed in from the products list page.
    useEffect(()=>{
        getPoster()
    },[])


    return ( 
        <div>  
        User: {replier.username} {replier.is_employee && <h6>(Trainer)</h6>}
        </div>
     );
}
export default ReviewCreater;