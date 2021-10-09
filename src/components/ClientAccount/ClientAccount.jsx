import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";


const ClientAccount = (props) => {
  const [userWorkout,setUserWorkout] = useState([''])

  useEffect(()=>{
    getCurrentUser()
},[])

async function getCurrentUser(){
  await axios.get(`http://127.0.0.1:8000/api/applicationFunctions/workout/${props.user.user_id}/`).then(response => {setUserWorkout(response.data)})
}

return ( 
  <React.Fragment>    
    <h1>Day 1 - Legs</h1>
      <table class="rwd-table">
                  <tr>
                      <th>Notes From Trainer</th>
                      <th>Exercise </th>
                      <th>Reps</th>
                      <th>Sets</th>
                  </tr>
    {userWorkout.map((element) =>
                  <><tbody>
                  <tr class="active-row">
                      <td data-th="Movie Title">{element.notes}</td>
                      <td data-th="Genre">{element.day1ex1}</td> 
                      <td data-th="Gross">{element.day1ex1sets}</td>
                      <td data-th="Gross">{element.day1ex1reps}</td> 
                   </tr>
                   <tr class="active-row">
                      <td data-th="Movie Title">{}</td>
                      <td data-th="Genre">{element.day1ex2}</td> 
                      <td data-th="Gross">{element.day1ex2sets}</td>
                      <td data-th="Gross">{element.day1ex2reps}</td>
                   </tr>
                   <tr class="active-row">
                      <td data-th="Movie Title">{}</td>
                      <td data-th="Genre">{element.day1ex3}</td> 
                      <td data-th="Gross">{element.day1ex3sets}</td>
                      <td data-th="Gross">{element.day1ex3reps}</td>
                   </tr>
                   <tr class="active-row">
                      <td data-th="Movie Title">{}</td>
                      <td data-th="Genre">{element.day1ex4}</td> 
                      <td data-th="Gross">{element.day1ex4sets}</td>
                      <td data-th="Gross">{element.day1ex4reps}</td>
                   </tr>
                   </tbody></>)}
          </table>
          <h1>Day 2 - Push - Chest/Shoulders/Triceps</h1>
      <table class="rwd-table">
                  <tr>
                      <th>Notes From Trainer</th>
                      <th>Exercise </th>
                      <th>Reps</th>
                      <th>Sets</th>
                  </tr>
    {userWorkout.map((element) =>
                  <><tbody>
                  <tr class="active-row">
                      <td data-th="Movie Title">{element.notes}</td>
                      <td data-th="Genre">{element.day2ex1}</td> 
                      <td data-th="Gross">{element.day2ex1sets}</td>
                      <td data-th="Gross">{element.day2ex1reps}</td> 
                   </tr>
                   <tr class="active-row">
                      <td data-th="Movie Title">{}</td>
                      <td data-th="Genre">{element.day2ex2}</td> 
                      <td data-th="Gross">{element.day2ex2sets}</td>
                      <td data-th="Gross">{element.day2ex2reps}</td>
                   </tr>
                   <tr class="active-row">
                      <td data-th="Movie Title">{}</td>
                      <td data-th="Genre">{element.day2ex3}</td> 
                      <td data-th="Gross">{element.day2ex3sets}</td>
                      <td data-th="Gross">{element.day2ex3reps}</td>
                   </tr>
                   <tr class="active-row">
                      <td data-th="Movie Title">{}</td>
                      <td data-th="Genre">{element.day2ex4}</td> 
                      <td data-th="Gross">{element.day2ex4sets}</td>
                      <td data-th="Gross">{element.day2ex4reps}</td>
                   </tr>
                   </tbody></>)}
          </table>
          <h1>Day 3 - Pull - Back/Biceps</h1>
      <table class="rwd-table">
                  <tr>
                      <th>Notes From Trainer</th>
                      <th>Exercise </th>
                      <th>Reps</th>
                      <th>Sets</th>
                  </tr>
    {userWorkout.map((element) =>
                  <><tbody>
                  <tr class="active-row">
                      <td data-th="Movie Title">{element.notes}</td>
                      <td data-th="Genre">{element.day3ex1}</td> 
                      <td data-th="Gross">{element.day3ex1sets}</td>
                      <td data-th="Gross">{element.day3ex1reps}</td> 
                   </tr>
                   <tr class="active-row">
                      <td data-th="Movie Title">{}</td>
                      <td data-th="Genre">{element.day3ex2}</td> 
                      <td data-th="Gross">{element.day3ex2sets}</td>
                      <td data-th="Gross">{element.day3ex2reps}</td>
                   </tr>
                   <tr class="active-row">
                      <td data-th="Movie Title">{}</td>
                      <td data-th="Genre">{element.day3ex3}</td> 
                      <td data-th="Gross">{element.day3ex3sets}</td>
                      <td data-th="Gross">{element.day3ex3reps}</td>
                   </tr>
                   <tr class="active-row">
                      <td data-th="Movie Title">{}</td>
                      <td data-th="Genre">{element.day3ex4}</td> 
                      <td data-th="Gross">{element.day3ex4sets}</td>
                      <td data-th="Gross">{element.day3ex4reps}</td>
                   </tr>
                   </tbody></>)}
          </table>
          <h1>Day 4 - Rest Day</h1>
          <h1>Day 5 - Full Body</h1>
      <table class="rwd-table">
                  <tr>
                      <th>Notes From Trainer</th>
                      <th>Exercise </th>
                      <th>Reps</th>
                      <th>Sets</th>
                  </tr>
    {userWorkout.map((element) =>
                  <><tbody>
                  <tr class="active-row">
                      <td data-th="Movie Title">{element.notes}</td>
                      <td data-th="Genre">{element.day1ex1}</td> 
                      <td data-th="Gross">{element.day1ex1sets}</td>
                      <td data-th="Gross">{element.day1ex1reps}</td> 
                   </tr>
                   <tr class="active-row">
                      <td data-th="Movie Title">{}</td>
                      <td data-th="Genre">{element.day2ex2}</td> 
                      <td data-th="Gross">{element.day2ex2sets}</td>
                      <td data-th="Gross">{element.day2ex2reps}</td>
                   </tr>
                   <tr class="active-row">
                      <td data-th="Movie Title">{}</td>
                      <td data-th="Genre">{element.day3ex2}</td> 
                      <td data-th="Gross">{element.day3ex2sets}</td>
                      <td data-th="Gross">{element.day3ex2reps}</td>
                   </tr>
                   <tr class="active-row">
                      <td data-th="Movie Title">{}</td>
                      <td data-th="Genre">{element.day2ex3}</td> 
                      <td data-th="Gross">{element.day2ex3sets}</td>
                      <td data-th="Gross">{element.day2ex3reps}</td>
                   </tr>
                   </tbody></>)}
          </table>

    </React.Fragment>
    )
    }

export default ClientAccount ;