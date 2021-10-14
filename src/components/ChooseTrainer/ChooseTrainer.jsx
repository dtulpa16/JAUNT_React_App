import React, {useEffect, useState, Component} from "react";
import axios from "axios";
import "./ChooseTrainer.css";
import TrainerReviews from "./TrainerReviews";
import { Redirect } from "react-router";


const ChooseTrainer = (props) => {
    const [users, setUsers] = useState([])
    const [isRegistered, setIsRegistered] = useState(false)

    useEffect(()=>{
        getUsers()
    },[''])

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
        setIsRegistered(true)
    }

    
    if (isRegistered == true) {
        // redirect to home if signed up
        return <Redirect to = {{ pathname: "/login"}} />;
      }
    return( 
     
        <table>
            <thead>
                    <tr class="table-light">
                        <th scope="col">Trainer</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Client Reviews</th>
                    </tr>
                    </thead>
        {users.map((element) => element.is_employee &&
                    <><tbody>
                    <tr class="table-light">
                        <th scope="row">{element.first_name} {element.last_name}</th>
                        <td>{element.age}</td> 
                        <td>{element.gender}</td>
                        <td><TrainerReviews trainer = {element.id}/></td>
                        <td><div class="button_slide slide_left" onClick={() => selectTrainer(element.id)}>Select Trainer!</div></td>
                     </tr>
                     </tbody></>)}
             
            </table>
  );
}

export default ChooseTrainer ;