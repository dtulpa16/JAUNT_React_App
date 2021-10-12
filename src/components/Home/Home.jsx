import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <div><h1>{quote.text}</h1><br/></div>
      <div><h3>{quote.author}</h3></div>
    </div>
   );
}

export default Home ;