import React, {useEffect, useState, Component} from "react";
import axios from "axios";
import "./ChooseTrainer.css";


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

    return( 
      users.map((element) => element.is_employee &&
    <React.Fragment>    
        <h1>{element.username}</h1>
    </React.Fragment>)
  );
}

export default ChooseTrainer ;