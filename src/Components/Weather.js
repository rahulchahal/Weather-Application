import React from 'react';
import { useState,useEffect} from 'react';
import './weather.css';

const Temp =()=>{

  const [city,setCity]=useState(null);
 // const [winds,setWinds]=useState(null);
  const [search,setSearch]=useState("London");

  useEffect(()=>{
      const fetchapi=async ()=>{
          const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=226fd365630b6226939eca3e81e9efa3`;
          
          const res=await fetch(url);
          const resjson=await res.json();
          
         // setWinds(resjson.wind);
          setCity(resjson.main);
         
          
          console.log(city);
      };
      fetchapi();
  },[search])


  return (

    <div>
        <div className="alldiv">
    <div className="header">
        <span className="logo">......</span>
    <span className="logoname"><strong>Weather Information</strong></span>
    </div>
    <div className="main">
     
     <input type="search" className="inp" value={search} onChange={(event)=>{
         setSearch(event.target.value)

     }}/>

{!city ?
(
    <h1>No data found</h1>
):
(
    <div>
<div className="info">
         <h1 className="location">{search}</h1>
         <h2>{city.temp} Celsius</h2>
        <h2> Min : {city.temp_min} | Max : {city.temp_max}</h2>
        
     </div>
     </div>
)

}



     
     
     </div>
     </div>
     </div>


  )


}

export default Temp;