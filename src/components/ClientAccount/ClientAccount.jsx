import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Excercises from "../Exercises/Exercises";
import PushExSub from "../Exercises/PushExSub";
import PullExSub from "../Exercises/PullExSub";


const ClientAccount = (props) => {
  const [userWorkout,setUserWorkout] = useState([''])

  useEffect(()=>{
    getCurrentUser()
},[])

async function getCurrentUser(){
  await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/workout/${props.user.user_id}/`).then(response => {setUserWorkout(response.data)})
}

return ( 
  <div>    
    <h2>Day 1 - Legs</h2>
      <table class="table table-hover">
               <thead>
                  <tr>
                      <th scope="col">Notes From Trainer</th>
                      <th scope="col">Exercise </th>
                      <th scope="col">Sets</th>
                      <th scope="col">Reps</th>
                  </tr>
               </thead>
    {userWorkout.map((element) =>
                  <><tbody>
                  <tr class="table-info">
                      <th scope="row">{element.notes}</th>
                      <th scope="row">{element.day1ex1}</th> 
                      <td>{element.day1ex1sets}</td>
                      <td>{element.day1ex1reps}</td> 
                   </tr>
                   <tr class="table-info">
                      <td>{}</td>
                      <th scope="row">{element.day1ex2}</th> 
                      <td>{element.day1ex2sets}</td>
                      <td>{element.day1ex2reps}</td>
                   </tr>
                   <tr class="table-info">
                      <td>{}</td>
                      <th scope="row">{element.day1ex3}</th> 
                      <td>{element.day1ex3sets}</td>
                      <td>{element.day1ex3reps}</td>
                   </tr>
                   <tr class="table-info">
                      <td>{}</td>
                      <th scope="row">{element.day1ex4}</th> 
                      <td>{element.day1ex4sets}</td>
                      <td>{element.day1ex4reps}</td>
                   </tr>
                   </tbody></>)}
          </table>
          <h2>Day 2 - Push - Chest/Shoulders/Triceps</h2>
      <table class="table table-hover">
                  <tr>
                      <th>Notes From Trainer</th>
                      <th>Exercise </th>
                      <th>Sets</th>
                      <th>Reps</th>
                  </tr>
    {userWorkout.map((element) =>
                  <><tbody>
                  <tr class="table-info">
                      <th scope="row">{element.notes}</th>
                      <th scope="row">{element.day2ex1}</th> 
                      <td>{element.day2ex1sets}</td>
                      <td>{element.day2ex1reps}</td> 
                   </tr>
                   <tr class="table-info">
                      <td>{}</td>
                      <th scope="row">{element.day2ex2}</th> 
                      <td>{element.day2ex2sets}</td>
                      <td>{element.day2ex2reps}</td>
                   </tr>
                   <tr class="table-info">
                      <td>{}</td>
                      <th scope="row">{element.day2ex3}</th> 
                      <td>{element.day2ex3sets}</td>
                      <td>{element.day2ex3reps}</td>
                   </tr>
                   <tr class="table-info">
                      <td>{}</td>
                      <th scope="row">{element.day2ex4}</th> 
                      <td>{element.day2ex4sets}</td>
                      <td>{element.day2ex4reps}</td>
                   </tr>
                   </tbody></>)}
          </table>
          <h2>Day 3 - Pull - Back/Biceps</h2>
      <table class="table table-hover">
                  <tr>
                      <th>Notes From Trainer</th>
                      <th>Exercise </th>
                      <th>Sets</th>
                      <th>Reps</th>
                  </tr>
    {userWorkout.map((element) =>
                  <><tbody>
                  <tr class="table-info">
                      <th scope="row">{element.notes}</th>
                      <th scope="row">{element.day3ex1}</th> 
                      <td>{element.day3ex1sets}</td>
                      <td>{element.day3ex1reps}</td> 
                   </tr>
                   <tr class="table-info">
                      <td>{}</td>
                      <th scope="row">{element.day3ex2}</th> 
                      <td>{element.day3ex2sets}</td>
                      <td>{element.day3ex2reps}</td>
                   </tr>
                   <tr class="table-info">
                      <td>{}</td>
                      <th scope="row">{element.day3ex3}</th> 
                      <td>{element.day3ex3sets}</td>
                      <td>{element.day3ex3reps}</td>
                   </tr>
                   <tr class="table-info">
                      <td>{}</td>
                      <th scope="row">{element.day3ex4}</th> 
                      <td>{element.day3ex4sets}</td>
                      <td>{element.day3ex4reps}</td>
                   </tr>
                   </tbody></>)}
          </table>
          <h2>Day 4 - Rest Day</h2>
          <h2>Day 5 - Full Body</h2>
      <table class="table table-hover">
                  <tr>
                      <th>Notes From Trainer</th>
                      <th>Exercise </th>
                      <th>Sets</th>
                      <th>Reps</th>
                  </tr>
    {userWorkout.map((element) =>
                  <><tbody>
                  <tr class="table-info">
                      <th scope="row">{element.notes}</th>
                      <th scope="row">{element.day1ex1}</th> 
                      <td>{element.day1ex1sets}</td>
                      <td>{element.day1ex1reps}</td> 
                   </tr>
                   <tr class="table-info">
                      <th scope="row">{}</th>
                      <th scope="row">{element.day2ex2}</th> 
                      <td>{element.day2ex2sets}</td>
                      <td>{element.day2ex2reps}</td>
                   </tr>
                   <tr class="table-info">
                      <th scope="row">{}</th>
                      <th scope="row">{element.day3ex2}</th> 
                      <td>{element.day3ex2sets}</td>
                      <td>{element.day3ex2reps}</td>
                   </tr>
                   <tr class="table-info">
                      <th>{}</th>
                      <th scope="row">{element.day2ex3}</th> 
                      <td>{element.day2ex3sets}</td>
                      <td>{element.day2ex3reps}</td>
                   </tr>
                   </tbody></>)}
          </table>

    </div>
    )
    }

export default ClientAccount ;