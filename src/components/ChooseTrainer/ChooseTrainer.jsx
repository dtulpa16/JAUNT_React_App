import React, {useEffect, useState, Component} from "react";
import axios from "axios";
import "./ChooseTrainer.css";
import TrainerReviews from "./TrainerReviews";


const ChooseTrainer = (props) => {
    const [users, setUsers] = useState([])
    const [trainers, setTrainers] = useState([])

    useEffect(()=>{
        getUsers()
    },[])

    async function getUsers(){
        await axios.get(`http://127.0.0.1:8000/api/auth/`).then(response => setUsers(response.data))

    }

    const getTrainers = () =>{
        let listOfTrainers = []
        users.map((element) => {if(element.is_employee = true){
            listOfTrainers.push(element)
        }})
        console.log(listOfTrainers)
    }

    async function selectTrainer(trainer){
        let payload = {trainer: trainer, client: props.location.state.id}
        await axios.post(`http://127.0.0.1:8000/api/applicationFunctions/assign/`, payload)
    }

    return( 
      users.map((element) => element.is_employee &&
    <React.Fragment>    
        <table class="rwd-table">
                    <tr>
                        <th>Trainer</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Client Reviews</th>
                    </tr>
                    <><tbody>
                    <tr class="active-row">
                        <td data-th="Movie Title">{element.first_name} {element.last_name}</td>
                        <td data-th="Genre">{element.age}</td> 
                        <td data-th="Gross">{element.gender}</td>
                        <td><TrainerReviews trainer = {element.id}/></td>
                        <td><div class="button_slide slide_left" onClick={() => selectTrainer(element.id)}>Select Trainer!</div></td>
                     </tr>
                     </tbody></>
             
            </table>
    </React.Fragment>)
  );
}

export default ChooseTrainer ;