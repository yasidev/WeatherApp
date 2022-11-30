import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Search from './Search'
import Weather from './Weather'

export default function Main() {
    const [query,setQuery] = useState('Tehran');
    const apiKey = "10e500a2733b2361f1e74acf08b3cccc";
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${apiKey}&units=metric&cnt=7`
    const [data,setData] = useState()
    async function getWeather(){
        try{
            const {data} =await axios.get(URL);
            setData(data)
            console.log(data)
        }
        catch{
            console.log(err)
        }
    }
    useEffect(()=>{
       getWeather()
    },[query])
  return (
    <div className='main'>
        <Search setQuery={setQuery}/>
        <Weather data={data}/>
    </div>
  )
}
