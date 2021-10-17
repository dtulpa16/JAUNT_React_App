import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './Home.css'

const Home = (props) => {
  const [quote,setQuote] = useState([])

  useEffect(()=>{
    getQuotes()
  },[])
  
  async function getQuotes(){
    await axios.get(`https://type.fit/api/quotes`).then(response => {getRandomQuote(response.data)})
  }

  const getRandomQuote = (quotes) =>{
    setQuote(quotes[Math.floor(Math.random()* quotes.length)])
  }

  return ( 
    <React.Fragment>
    <div className='quote'>
    <div className = 'div' title="404">{quote.text} <br/> -{quote.author}</div>
    </div>
    </React.Fragment>
   );
}

export default Home ;