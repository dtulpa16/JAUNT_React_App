import React from "react";

const ModifyCals = (props) => {
  return ( 
    <div class="card text-white bg-info mb-3" style="max-width: 20rem;">
  <div class="card-header">Modify {props.client.first_name}'s Calories</div>
  <div class="card-body">
    <h4 class="card-title">{props.client.first_name}'s current goal: {props.client.goal}</h4>
    <p class="card-text"><div class="form-group">
  <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Enter Calories</label>
  <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="inputSmall"/>
</div></p>
  </div>
</div>
   );
}

export default ModifyCals ;