import React, {useEffect, useState} from "react";
import axios from "axios";
import ReviewCreater from "./ReviewCreater";


const DisplayReplies = (props) => {
    const [replies,setReplies] = useState([])

    async function filterReplies(){
        console.log(props.val)
        const jwt =localStorage.getItem('token');
        await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/forumpost/${props.val}/reply/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response => setReplies(response.data))
    }    

    useEffect(()=>{
        filterReplies()
    },[props.rerender])

    return(
        <React.Fragment>
        Replies:<hr/>{replies.map((element)=><><div><p><ReviewCreater user= {element.user}/></p></div> <div><p>{element.body}<hr></hr></p></div></>)}
        </React.Fragment>
    )}
export default DisplayReplies;