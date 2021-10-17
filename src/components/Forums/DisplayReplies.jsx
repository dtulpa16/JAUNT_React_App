import React, {useEffect, useState} from "react";
import axios from "axios";
import ReviewCreater from "./ReviewCreater";


const DisplayReplies = (props) => {
    const [replies,setReplies] = useState([])

    async function filterReplies(){
        try{
        console.log(props.val)
        const jwt =localStorage.getItem('token');
        await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/forumpost/${props.val}/reply/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response => setReplies(response.data))
        }catch{
        console.log(props.val)
        const refreshtoken = localStorage.getItem('refresh');
      let refreshResponse = await axios.post(`http://127.0.0.1:8000/api/auth/login/refresh/`, {refresh: refreshtoken})
        localStorage.setItem('token', refreshResponse.data.access)
        const jwt =localStorage.getItem('token');
        await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/forumpost/${props.val}/reply/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response => setReplies(response.data))
        }
    }    

    useEffect(()=>{
        filterReplies()
    },[props.rerender])

    return(
        <React.Fragment>
        {replies.map((element)=><><div><ReviewCreater user= {element.user}/></div> <div><h6>{element.body}</h6></div></>)}
        </React.Fragment>
    )}
export default DisplayReplies;