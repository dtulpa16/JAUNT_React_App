import './ModifyCals.css'
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from 'react-router';

const ModifyCals = (props) => {
    const [calories,setCalories] = useState(0)

    const handleChangeOne = (event) =>{
        setCalories(parseInt(event.target.value));
      };

    const handleSubmit =(event)=>{
        event.preventDefault();
        let newCals= {
            id:props.location.state.id,
            calories:calories
        }
          updateCals(newCals)
      }
      async function updateCals(newCals){
        try{
        const jwt =localStorage.getItem('token');
        await axios.put(`http://127.0.0.1:8000/api/auth/${props.location.state.id}/`,newCals, { headers: {Authorization: 'Bearer ' + jwt}});
        }catch{
          const refreshtoken = localStorage.getItem('refresh');
          let refreshResponse = await axios.post(`http://127.0.0.1:8000/api/auth/login/refresh/`, {refresh: refreshtoken})
      localStorage.setItem('token', refreshResponse.data.access)
      const jwt =localStorage.getItem('token');
        await axios.put(`http://127.0.0.1:8000/api/auth/${props.location.state.id}/`,newCals, { headers: {Authorization: 'Bearer ' + jwt}});
        }
        alert("Calories updated!")
      }

  return ( 
    <div className="wrapperCals">
    <img src="https://i.pinimg.com/originals/33/3e/3d/333e3d9ea630e40fde3c5713bdf367f7.png" width="10%" height="10%" />
    <div class="card bg-light mb-3">
  <div class="card-header">Modify {props.location.state.name}'s Calories</div>
  <div class="card-body">
    <h4 class="card-title">{props.location.state.name}'s current goal: {props.location.state.goal}</h4>
    <p class="card-text"><div class="form-group">
    <form className= "calories" onSubmit={(event) => handleSubmit (event)}>
  <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Enter New Daily Calories</label>
  <input onChange={handleChangeOne} class="form-control form-control-sm" type="number" name = 'calories' id="inputLarge"/><br/>
  <button type="submit" class="btn btn-outline-dark" >Send To Client!</button>
  </form>
  
</div></p>
  </div>
</div>
</div>

   );
}

export default ModifyCals ;