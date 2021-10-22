import React from "react";
import { useEffect } from "react/cjs/react.development";
import UseGetTrainer from "../../Hooks/UseGetTrainer";
import axios from "axios";
import { useState } from "react";

const FromTheExperts = ({user}) => {
  const [posts,setPosts] = useState([])

  const trainer = UseGetTrainer(user.user_id)

  useEffect(()=>{
    getTrainerPosts(trainer)
  },[])


  async function getTrainerPosts(trainer){
  try{
    const jwt =localStorage.getItem('token');
    await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/trainerblog/${trainer}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response=>{setPosts(response.data)})
    }catch{
        const refreshtoken = localStorage.getItem('refresh');
  let refreshResponse = await axios.post(`http://127.0.0.1:8000/api/auth/login/refresh/`, {refresh: refreshtoken})
        localStorage.setItem('token', refreshResponse.data.access)
    await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/trainerblog/${trainer}/`, { headers: {Authorization: 'Bearer ' + refreshResponse.data.access}}).then(response=>{setPosts(response.data)})
    }
}



  return ( 
    <div>
      {posts.map((element)=>element.body)}
    </div>
   );
}

export default FromTheExperts ;