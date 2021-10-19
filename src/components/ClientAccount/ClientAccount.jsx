import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Excercises from "../Exercises/Exercises";
import PushExSub from "../Exercises/PushExSub";
import PullExSub from "../Exercises/PullExSub";
import LegSub from "../ExerciseSubs/LegSub";
import PushSub from "../ExerciseSubs/PushSub";
import PullSub from "../ExerciseSubs/PullSub";
import './ClientAccount.css'


const ClientAccount = (props) => {
  const [userWorkout,setUserWorkout] = useState([''])

  useEffect(()=>{
    getCurrentUser()
},[])

async function getCurrentUser(){
   try{
      const jwt =localStorage.getItem('token');
      await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/workout/${props.user.user_id}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response => {setUserWorkout(response.data)})
   }catch{
      const refreshtoken = localStorage.getItem('refresh');
      let refreshResponse = await axios.post(`http://127.0.0.1:8000/api/auth/login/refresh/`, {refresh: refreshtoken})
      localStorage.setItem('token', refreshResponse.data.access)
      const jwt =localStorage.getItem('token');
      await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/workout/${props.user.user_id}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response => {setUserWorkout(response.data)})
   }
}

return ( 
  <div class="container">  
  <div class="row" >
      <div class="col-md-7">
         <div className='fadeInDown'>
      <h6 className="DOW">Day 1 - Legs</h6>
      <table className="legs-table">
         <thead>
                  <tr class="legs-table-contents">
                      <th scope="col">Notes From Trainer</th>
                      <th scope="col">Exercise </th>
                      <th scope="col">Sets</th>
                      <th scope="col">Reps</th>
                  </tr>
               </thead>
    {userWorkout.map((element) =>
                  <><tbody>
                  <tr >
                      <th scope="row">{element.notes}</th>
                      <th scope="row">{element.day1ex1}</th> 
                      <td>{element.day1ex1sets}</td>
                      <td>{element.day1ex1reps}</td> 
                   </tr>
                   <tr >
                      <td>{}</td>
                      <th scope="row">{element.day1ex2}</th> 
                      <td>{element.day1ex2sets}</td>
                      <td>{element.day1ex2reps}</td>
                   </tr>
                   <tr >
                      <td>{}</td>
                      <th scope="row">{element.day1ex3}</th> 
                      <td>{element.day1ex3sets}</td>
                      <td>{element.day1ex3reps}</td>
                   </tr>
                   <tr >
                      <td>{}</td>
                      <th scope="row">{element.day1ex4}</th> 
                      <td>{element.day1ex4sets}</td>
                      <td>{element.day1ex4reps}</td>
                   </tr>
                   </tbody></>)}
          </table>
          
          
      <h6 className="DOW">Day 2 - Push - Chest/Shoulders/Triceps</h6>
      <table className="push-table">
                  <tr >
                      <th>Notes From Trainer</th>
                      <th>Exercise </th>
                      <th>Sets</th>
                      <th>Reps</th>
                  </tr>
    {userWorkout.map((element) =>
                  <><tbody>
                  <tr >
                      <th scope="row">{element.notes}</th>
                      <th scope="row">{element.day2ex1}</th> 
                      <td>{element.day2ex1sets}</td>
                      <td>{element.day2ex1reps}</td> 
                   </tr>
                   <tr >
                      <td>{}</td>
                      <th scope="row">{element.day2ex2}</th> 
                      <td>{element.day2ex2sets}</td>
                      <td>{element.day2ex2reps}</td>
                   </tr>
                   <tr >
                      <td>{}</td>
                      <th scope="row">{element.day2ex3}</th> 
                      <td>{element.day2ex3sets}</td>
                      <td>{element.day2ex3reps}</td>
                   </tr>
                   <tr >
                      <td>{}</td>
                      <th scope="row">{element.day2ex4}</th> 
                      <td>{element.day2ex4sets}</td>
                      <td>{element.day2ex4reps}</td>
                   </tr>
                   </tbody></>)}
          </table>

          <h6 className="DOW">Day 3 - Pull - Back/Biceps</h6>
      <table className="pull-table">
                  <tr >
                      <th>Notes From Trainer</th>
                      <th>Exercise </th>
                      <th>Sets</th>
                      <th>Reps</th>
                  </tr>
    {userWorkout.map((element) =>
                  <><tbody>
                  <tr >
                      <th scope="row">{element.notes}</th>
                      <th scope="row">{element.day3ex1}</th> 
                      <td>{element.day3ex1sets}</td>
                      <td>{element.day3ex1reps}</td> 
                   </tr>
                   <tr >
                      <td>{}</td>
                      <th scope="row">{element.day3ex2}</th> 
                      <td>{element.day3ex2sets}</td>
                      <td>{element.day3ex2reps}</td>
                   </tr>
                   <tr >
                      <td>{}</td>
                      <th scope="row">{element.day3ex3}</th> 
                      <td>{element.day3ex3sets}</td>
                      <td>{element.day3ex3reps}</td>
                   </tr>
                   <tr >
                      <td>{}</td>
                      <th scope="row">{element.day3ex4}</th> 
                      <td>{element.day3ex4sets}</td>
                      <td>{element.day3ex4reps}</td>
                   </tr>
                   </tbody></>)}
          </table>
          <h6 className="DOW">Day 4 - Rest Day</h6>
          <h6 className="DOW">Day 5 - Full Body</h6>
      <table className="fb-table">
                  <tr >
                      <th>Notes From Trainer</th>
                      <th>Exercise </th>
                      <th>Sets</th>
                      <th>Reps</th>
                  </tr>
    {userWorkout.map((element) =>
                  <><tbody>
                  <tr >
                      <th scope="row">{element.notes}</th>
                      <th scope="row">{element.day1ex1}</th> 
                      <td>{element.day1ex1sets}</td>
                      <td>{element.day1ex1reps}</td> 
                   </tr>
                   <tr >
                      <th scope="row">{}</th>
                      <th scope="row">{element.day2ex2}</th> 
                      <td>{element.day2ex2sets}</td>
                      <td>{element.day2ex2reps}</td>
                   </tr>
                   <tr >
                      <th scope="row">{}</th>
                      <th scope="row">{element.day3ex2}</th> 
                      <td>{element.day3ex2sets}</td>
                      <td>{element.day3ex2reps}</td>
                   </tr>
                   <tr >
                      <th>{}</th>
                      <th scope="row">{element.day2ex3}</th> 
                      <td>{element.day2ex3sets}</td>
                      <td>{element.day2ex3reps}</td>
                   </tr>
                   </tbody></>)}
          </table></div> </div>

          <div class="col-md-5">
          <div class="fadeInDown">
             <h6 className="subtext">Workout Substitutions</h6>
             <div className="subs">
          <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Leg Exercise Substitutions
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
         <LegSub/>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Pull Exercise Substitutions
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
         <PullSub/>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Push Exercise Substitutions
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
         <PushSub/>
      </div>
    </div></div>
  </div>
</div>
</div></div>
    </div></div>
    )
    }

export default ClientAccount ;