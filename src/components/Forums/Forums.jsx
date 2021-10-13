import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DisplayForumPost from "./DisplayForumPost";

const Forums = ({user}) => {
    const [post, setPost] = useState('')
    const [renderNewPost, setRenderNewPost] = useState()

    useEffect(() => {
        setRenderNewPost()
    },[]);

    const handleChange = (event)=>{
        setPost(event.target.value);
      };
    

    const handleSubmit =(event)=>{
      event.preventDefault()
        let newPost= {
            user:user.user_id,
            body:post,
        }
          addNewPost(newPost)
      }

      
      async function addNewPost(newPost){
        const jwt =localStorage.getItem('token');
        await axios.post(`http://127.0.0.1:8000/api/applicationFunctions/forumpost/`,newPost, { headers: {Authorization: 'Bearer ' + jwt}});
        setRenderNewPost(!renderNewPost)
      }


    return ( 
        <React.Fragment>
          <h1>Forums</h1>
                 <form className= "post" onSubmit={(event) => handleSubmit (event)}>
                <label>Add A Post!</label>
                <input name= "post" onChange={handleChange} value={post}/>
                <button type = "submit">Post!</button>
                </form> 
                <div><DisplayForumPost posts ={post} user = {user} rerender = {renderNewPost}/></div>
        </React.Fragment>
     );
}

export default Forums ;