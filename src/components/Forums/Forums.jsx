import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DisplayForumPost from "./DisplayForumPost";

const Forums = ({user}) => {
    const [post, setPost] = useState([''])
    const [newPost, setNewPost] = useState(false)

    useEffect(() => {
        
    },[post]);

    const handleChange = (event)=>{
        setPost(event.target.value);
      };
    

    const handleSubmit =(event)=>{
      event.preventDefault()
      setNewPost(true)
        let newPost= {
            user:user.user_id,
            body:post,
        }
        setNewPost(false)
          addNewPost(newPost)
      }
      async function addNewPost(newPost){
        await axios.post(`http://127.0.0.1:8000/api/applicationFunctions/forumpost/`,newPost);
      }


    return ( 
        <React.Fragment>
          <h1>Forums</h1>
                 <form className= "post" onSubmit={(event) => handleSubmit (event)}>
                <label>Add A Post!</label>
                <input name= "post" onChange={handleChange} value={post}/>
                <button type = "submit">Post!</button>
                </form> 
                <p><DisplayForumPost posts ={post} user = {user}/></p>
        </React.Fragment>
     );
}

export default Forums ;