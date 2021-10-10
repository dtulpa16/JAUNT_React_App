import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DisplayForumPost from "./DisplayForumPost";

const Forums = (props) => {
    const [post, setPost] = useState([''])
    const [currentUser, setCurrentUser] = useState([''])
    const [creaters, setCreaters] = useState([])

    useEffect(() => {
        getCurrentUser()
    },[props]);

    const handleChange = (event)=>{
        setPost(event.target.value);
      };
    

    const handleSubmit =(event)=>{
        event.preventDefault();
        let newPost= {
            user:currentUser.id,
            body:post,
        }

          addNewPost(newPost)
      }
      async function addNewPost(newPost){
        await axios.post(`http://127.0.0.1:8000/api/applicationFunctions/forumpost/`,newPost);
      }

      async function getCurrentUser(){
        await axios.get(`http://127.0.0.1:8000/api/auth/${props.user.user_id}/`).then(response => {setCurrentUser(response.data)})
      }


    return ( 
        <React.Fragment>
          <h1>Forums</h1>
                 <form className= "post" onSubmit={(event) => handleSubmit (event)}>
                <label>Add A Post!</label>
                <input name= "post" onChange={handleChange} value={post}/>
                <button type = "submit">Post!</button>
                </form> 
                <DisplayForumPost posts ={post}/>
        </React.Fragment>
     );
}

export default Forums ;