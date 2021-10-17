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
        try{
        const jwt =localStorage.getItem('token');
        await axios.post(`http://127.0.0.1:8000/api/applicationFunctions/forumpost/`,newPost, { headers: {Authorization: 'Bearer ' + jwt}});
        setRenderNewPost(!renderNewPost)
        }catch{
          const refreshtoken = localStorage.getItem('refresh');
      let refreshResponse = await axios.post(`http://127.0.0.1:8000/api/auth/login/refresh/`, {refresh: refreshtoken})
          localStorage.setItem('token', refreshResponse.data.access)
          const jwt =localStorage.getItem('token');
        await axios.post(`http://127.0.0.1:8000/api/applicationFunctions/forumpost/`,newPost, { headers: {Authorization: 'Bearer ' + jwt}});
        setRenderNewPost(!renderNewPost)
        }
      }


    return ( 
        <React.Fragment>
          <div className="forums">
          <h1>Forums</h1>
                <form className = "post" onSubmit={(event) => handleSubmit (event)}>
                <h6>Add A Post!</h6>
                <input class ="post" name= "post" onChange={handleChange} value={post}/>
                <button type="submit" class="btn btn-outline-dark" >Post!</button>
                </form> 
                <div className="post"><DisplayForumPost posts ={post} user = {user} rerender = {renderNewPost}/></div>
                </div>
        </React.Fragment>
     );
}

export default Forums ;