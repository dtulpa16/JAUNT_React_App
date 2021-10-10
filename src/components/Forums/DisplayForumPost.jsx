import React, {useEffect, useState, Component} from "react";
import axios from "axios";
import PostCreater from "../PostCreater";


const DisplayForumPost = (props) => {
    const [posts, setPosts] = useState(['No posts'])

    async function getPosts(product){
        await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/forumpost/`).then(response=>{setPosts(response.data)})
    }

    useEffect(()=>{
        getPosts()

    },[])


    return ( 
        <React.Fragment>
        {posts.map((element)=><div><p><PostCreater creator={element.user}/>{element.body}</p></div>)}
        </React.Fragment>
     );
}


export default DisplayForumPost;