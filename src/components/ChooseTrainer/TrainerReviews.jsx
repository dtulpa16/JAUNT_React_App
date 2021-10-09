import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./ChooseTrainer.css";

const TrainerReviews = (props) => {
    const[reviews,setReviews] = useState([])

    useEffect(()=>{
        getReviews()
    })

    async function getReviews(){
        await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/review/${props.trainer}/`).then(response => {setReviews(response.data)})
    }
  return ( 
    <div>
      {reviews.map((element)=><li>{element.body}</li>)}
    </div>
   );
}

export default TrainerReviews ;