import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './ReviewTrainer.css'
const ReviewTrainer = ({user}) => {
    const [review,setReview] = useState()
    const [trainer,setTrainer] = useState('')


    useEffect(()=>{
        getTrainer()
    },[])

    const handleChangeOne = (event) =>{
        setReview(event.target.value);
      };

    const handleSubmit =(event)=>{
        event.preventDefault();
        let newReview= {
            user:trainer[0].trainer,
            body:review
        }
          createReview(newReview)
      }

    async function createReview(review){
      try{
      const jwt =localStorage.getItem('token');
        await axios.post(`http://127.0.0.1:8000/api/applicationFunctions/review/`,review, { headers: {Authorization: 'Bearer ' + jwt}});
        }catch{
          const refreshtoken = localStorage.getItem('refresh');
      let refreshResponse = await axios.post(`http://127.0.0.1:8000/api/auth/login/refresh/`, {refresh: refreshtoken})
          localStorage.setItem('token', refreshResponse.data.access)
          const jwt =localStorage.getItem('token');
        await axios.post(`http://127.0.0.1:8000/api/applicationFunctions/review/`,review, { headers: {Authorization: 'Bearer ' + jwt}});
        }
      }

    async function getTrainer(){
      try{
      const jwt =localStorage.getItem('token');
        await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/trainer/${user.user_id}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response=>{setTrainer(response.data)});
      }catch{
        let refresh = localStorage.getItem('refresh');
      let refreshResponse = await axios.post(`http://127.0.0.1:8000/api/auth/login/refresh/`, refresh)
      localStorage.setItem('token', refreshResponse.data.access)
      const jwt =localStorage.getItem('token');
        await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/trainer/${user.user_id}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response=>{setTrainer(response.data)});
      }
    }


  return ( 
    <div className="wrapperReview">
    <div class="card bg-light mb-3">
    <div class="card-header">Review Trainer</div>
    <div class="card-body">
    <h4 class="card-title">Leave Your Trainer A Review For Other Fitness Enthusiasts To See!</h4>
    <p class="card-text"><div class="form-group">
        <form onSubmit={(event) => handleSubmit (event)}>
        <label class="exampleSelect2" for="form-label mt-4">Large input</label>
        <input onChange={handleChangeOne} class="form-control form-control-lg" type="text" name = 'review' value={review} id="inputLarge"/><br/>
        <button type="submit" class="btn btn-outline-dark" >Submit Review!</button>
    </form>
    </div></p>
  </div>
</div>
</div>
   );
}

export default ReviewTrainer ;