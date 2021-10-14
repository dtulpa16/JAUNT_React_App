import React, {useEffect, useState, Component} from "react";
import axios from "axios";
import PostCreater from "../PostCreater";
import DisplayReplies from "./DisplayReplies";
import './Forums.css'


const DisplayForumPost = (props) => {
    const [posts, setPosts] = useState([])
    const [reply, setReply] = useState([])
    const [renderNewPost, setRenderNewPost] = useState()


    async function getPosts(){
        try{
        const jwt =localStorage.getItem('token');
        await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/forumpost/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response=>{setPosts(response.data)})
        }catch{
            const refreshtoken = localStorage.getItem('refresh');
      let refreshResponse = await axios.post(`http://127.0.0.1:8000/api/auth/login/refresh/`, {refresh: refreshtoken})
            localStorage.setItem('token', refreshResponse.data.access)
        await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/forumpost/`, { headers: {Authorization: 'Bearer ' + refreshResponse.data.access}}).then(response=>{setPosts(response.data)})
        }
    }

    useEffect(()=>{
        getPosts()
        setRenderNewPost()
    },[props.rerender])

    const handleSubmit = (e,id) =>{
        e.preventDefault()
        let newReply = {comment: id, body: reply, user:props.user.user_id}
        postReplies(newReply)
        
    }

    async function postReplies(newReply){
        try{
        const jwt =localStorage.getItem('token');
        await axios.post(`http://127.0.0.1:8000/api/applicationFunctions/forumreply/`,newReply, { headers: {Authorization: 'Bearer ' + jwt}})
        setRenderNewPost(!renderNewPost)
        }catch{
        const refresh =localStorage.getItem('refresh');
        await axios.post(`http://127.0.0.1:8000/api/applicationFunctions/forumreply/`,newReply, { headers: {Authorization: 'Bearer ' + refresh}})
        setRenderNewPost(!renderNewPost)
        }
    }

    const handleChange= (event) => {
        setReply (event.target.value);
    }
    
    return ( 
        <React.Fragment>
           
        {posts.map((element)=><div ><div className="reply"><PostCreater creator={element.user}/>{element.body}</div>

        <div className="post"> 
        
        <div className="reply"><DisplayReplies val = {element.id} reply = {reply} rerender={renderNewPost}/></div>
        
        
        <form  type = 'submit' onSubmit = {e => handleSubmit(e,element.id, element.user)} >
            <input name = "reply" onChange={handleChange} placeholder="Reply" type='text'></input>
            <button type = "submit">Reply!</button>
            </form>
            </div>
            </div>)}
        
        </React.Fragment>
     );
}


export default DisplayForumPost;