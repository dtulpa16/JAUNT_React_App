import './ReviewTrainer.css';
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

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
      const jwt =localStorage.getItem('token');
        await axios.post(`http://127.0.0.1:8000/api/applicationFunctions/review/`,review);
        alert("Review Submitted! Thank you for your feedback!")
      }

    async function getTrainer(){
      try{
      const jwt =localStorage.getItem('token');
        await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/trainer/${user.user_id}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response=>{setTrainer(response.data)});
      }catch{
        let newRefresh = localStorage.getItem('refresh');
      let refreshResponse = await axios.post(`http://127.0.0.1:8000/api/auth/login/refresh/`, {refresh:newRefresh})
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
        <form className="review" onSubmit={(event) => handleSubmit (event)}>
        <label class="col-form-label col-form-label-sm mt-4" for="inputSmall"></label>
        <input onChange={handleChangeOne}  placeholder="Leave A review!" class="form-control form-control-sm" type="text" name = 'review' value={review} id="inputLarge"/><br/>
        <button type="submit" class="btn btn-outline-dark" >Submit Review!</button>
    </form>
    </div></p>
  </div>
</div>
</div>
   );
}

export default ReviewTrainer ;