import React, {useEffect, useState, Component} from "react";
import axios from "axios";
import DisplayForumPost from "./Forums/DisplayForumPost";

const PostCreater = (props) => {
    const [user, setUser] = useState('')

    async function getPoster(props){
        await axios.get(`http://127.0.0.1:8000/api/auth/${props.creator}/`).then(response => {setUser(response.data)})
      }
//First thing to run will be a function that will fetch the written reviews of each product based on the id. 
//Props is being passed in from the products list page.
    useEffect(()=>{
        getPoster(props)
    },[])


    return ( 
        <div>  
        User: {user.username} {user.is_employee && <h6>(Trainer)</h6>}
        </div>
     );
}
export default PostCreater;