import React, {useEffect, useState, Component} from "react";
import axios from "axios";
import PostCreater from "../PostCreater";
import DisplayReplies from "./DisplayReplies";


const DisplayForumPost = (props) => {
    const [posts, setPosts] = useState([])
    const [reply, setReply] = useState([])
    const [loadRequest, setLoadRequest] = useState(false)

    async function getPosts(product){
        await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/forumpost/`).then(response=>{setPosts(response.data)})
    }

    useEffect(()=>{
        getPosts()
    },[])

    const handleSubmit = (e,id) =>{
        e.preventDefault()
        let newReply = {comment: id, body: reply, user:props.user.user_id}
        postReplies(newReply)
    }

    async function postReplies(newReply){
        
        await axios.post(`http://127.0.0.1:8000/api/applicationFunctions/forumreply/`,newReply)
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
        <p><DisplayReplies val = {element.id} reply = {reply} test = {postReplies()}/></p>
                    </div>)}

        </React.Fragment>
     );
}


export default DisplayForumPost;