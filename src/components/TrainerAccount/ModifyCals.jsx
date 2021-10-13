
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

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
        const jwt =localStorage.getItem('token');
        await axios.put(`http://127.0.0.1:8000/api/auth/${props.location.state.id}/`,newCals, { headers: {Authorization: 'Bearer ' + jwt}});
      }

  return ( 
    <div class="card text-white bg-info mb-3">
  <div class="card-header">Modify {props.location.state.name}'s Calories</div>
  <div class="card-body">
    <h4 class="card-title">{props.location.state.name}'s current goal: {props.location.state.goal}</h4>
    <p class="card-text"><div class="form-group">
    <form className= "calories" onSubmit={(event) => handleSubmit (event)}>
  <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Enter New Daily Calories</label>
  <input onChange={handleChangeOne} class="form-control form-control-sm" type="number" name = 'calories' id="inputSmall"/>
  </form>
  
</div></p>
  </div>
</div>
   );
}

export default ModifyCals ;