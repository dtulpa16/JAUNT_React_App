import React, {useEffect, useState, Component} from "react";
import axios from "axios";
import PostCreater from "../PostCreater";
import DisplayReplies from "./DisplayReplies";


const DisplayForumPost = (props) => {
    const [posts, setPosts] = useState([])
    const [reply, setReply] = useState([])
    const [renderNewPost, setRenderNewPost] = useState()


    async function getPosts(){
        const jwt =localStorage.getItem('token');
        await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/forumpost/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response=>{setPosts(response.data)})
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
        const jwt =localStorage.getItem('token');
        await axios.post(`http://127.0.0.1:8000/api/applicationFunctions/forumreply/`,newReply, { headers: {Authorization: 'Bearer ' + jwt}})
        setRenderNewPost(!renderNewPost)
    }

    const handleChange= (event) => {
        setReply (event.target.value);
    }
    
    return ( 
        <React.Fragment>
        {posts.map((element)=><div><div><p><PostCreater creator={element.user}/>{element.body}</p></div>

        <form className="reply" type = 'submit' onSubmit = {e => handleSubmit(e,element.id, element.user)} >
            <input className="Reply" name = "reply" onChange={handleChange} placeholder="Reply" type='text'></input>
            <button type = "submit">Reply!</button>
            </form>
        <p><DisplayReplies val = {element.id} reply = {reply} rerender={renderNewPost}/></p>
                    </div>)}

        </React.Fragment>
     );
}


export default DisplayForumPost;