import React, { useEffect, useState } from 'react'
import "./Weather.scss"
import rain from "../../assets/image/rain.jpeg"
import clouds from "../../assets/image/cloud.jpeg"
import warm from "../../assets/image/warm.png"


import Loder from '../Loder/Loder'
import { useUserAuth } from "../../context/UserAuthContext";



const Weather = () => {
    const[weatherdata,setWeatherdata] = useState()
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const {user,getCrop } =useUserAuth();
    

    const iconUrlFromCode = (code) =>
           `http://openweathermap.org/img/wn/${code}@2x.png`;

    useEffect(()=>{
        const getdata = async() =>{
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${user.city},IN&appid=3f373b16fc17986d8317c194603bbc6f`
            var res = await fetch(url)
             res = await res.json()
             res = await res.list
             await setWeatherdata(res)
        }
        
        getdata()
        console.log(weatherdata);
    },[window.location.pathname=="/CropInfo"])
  return (
      <>
      {weatherdata?
    <div className='weather_main'>
        
        <div className='weather_card_1'>
            <div className='weather_back'>
            <img src={weatherdata[0].weather[0].main=="Rain"?rain:(weatherdata[0].weather[0].main=="Clouds"?clouds:warm)} alt="" />
            <div className='weathert_text'>
                <h2>Today</h2>
                <img src={iconUrlFromCode(weatherdata[0].weather[0].icon)} alt="" />
                <h2>{weatherdata[0].weather[0].description}</h2>
                <h1>{(weatherdata[0].main.temp-273.15).toFixed(0)}°c</h1>
            </div>
            </div>

        </div>
        <div className='weather_card_2'>
        <div className='weather_back'>
            <img src={weatherdata[8].weather[0].main=="Rain"?rain:(weatherdata[8].weather[0].main=="Clouds"?clouds:warm)} alt="" />
            <div className='weathert_text'>
                <h2>{ weekday[new Date(weatherdata[8].dt_txt).getDay()]}</h2>
                <img src={iconUrlFromCode(weatherdata[8].weather[0].icon)} alt="" />
                <h2>{weatherdata[8].weather[0].description}</h2>
                <h1>{(weatherdata[8].main.temp-273.15).toFixed(0)}°c</h1>
            </div>
            </div>

        </div>
        <div className='weather_card_3'>
                <div className='weather_back'>
            <img src={weatherdata[16].weather[0].main=="Rain"?rain:(weatherdata[16].weather[0].main=="Clouds"?clouds:warm)} alt="" />
            <div className='weathert_text'>
                <h2>{ weekday[new Date(weatherdata[16].dt_txt).getDay()]}</h2>
                <img src={iconUrlFromCode(weatherdata[16].weather[0].icon)} alt="" />
                <h2>{weatherdata[16].weather[0].description}</h2>
                <h1>{(weatherdata[16].main.temp-273.15).toFixed(0)}°c</h1>
            </div>
            </div>

        </div>
        <div className='weather_card_4'>
        <div className='weather_back'>
            <img src={weatherdata[24].weather[0].main=="Rain"?rain:(weatherdata[24].weather[0].main=="Clouds"?clouds:warm)} alt="" />
            <div className='weathert_text'>
                <h2>{ weekday[new Date(weatherdata[24].dt_txt).getDay()]}</h2>
                <img src={iconUrlFromCode(weatherdata[24].weather[0].icon)} alt="" />
                <h2>{weatherdata[24].weather[0].description}</h2>
                <h1>{(weatherdata[24].main.temp-273.15).toFixed(0)}°c</h1>
            </div>
            </div>

        </div>
        <div className='weather_card_5'>
        <div className='weather_back'>
            <img src={weatherdata[32].weather[0].main=="Rain"?rain:(weatherdata[32].weather[0].main=="Clear"?clouds:warm)} alt="" />
            <div className='weathert_text'>
                <h2>{ weekday[new Date(weatherdata[32].dt_txt).getDay()]}</h2>
                <img src={iconUrlFromCode(weatherdata[32].weather[0].icon)} alt="" />
                <h2>{weatherdata[32].weather[0].description}</h2>
                <h1>{(weatherdata[32].main.temp-273.15).toFixed(0)}°c</h1>
            </div>
            </div>
        </div>
    </div>
    :<Loder/>}
    </>
  )
}

export default Weather