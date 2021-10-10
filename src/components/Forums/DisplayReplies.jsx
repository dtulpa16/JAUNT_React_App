import React, {useEffect, useState} from "react";
import axios from "axios";


const DisplayReplies = (props) => {
    const [replies,setReplies] = useState([''])

    async function filterReplies(){
        console.log(props.val)
        await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/forumpost/${props.val}/reply/`).then(response => setReplies(response.data))
    }    

    useEffect(()=>{
        filterReplies()
    },[replies.length])

    return(
        <div className="replies">
        {replies.map((element)=><tr> Replies: {element.body}</tr>)}
        </div>
    )}
export default DisplayReplies;