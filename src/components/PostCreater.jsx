import React, {useEffect, useState, Component} from "react";
import axios from "axios";
import DisplayForumPost from "./Forums/DisplayForumPost";

const PostCreater = (props) => {
    const [user, setUser] = useState('')

    async function getPoster(props){
        const jwt =localStorage.getItem('token');
        await axios.get(`http://127.0.0.1:8000/api/auth/${props.creator}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response => {setUser(response.data)})
      }
//First thing to run will be a function that will fetch the written reviews of each product based on the id. 
//Props is being passed in from the products list page.
    useEffect(()=>{
        getPoster(props)
    },[])


    return ( 
        <div>  
        User: {user.username} {user.is_employee && <span class="badge rounded-pill bg-success">Trainer</span>}
        </div>
     );
}
export default PostCreater;