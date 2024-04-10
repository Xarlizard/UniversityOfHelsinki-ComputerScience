import weatherService from '../services/weather'
import { useEffect } from 'react'

const OneCountry = ({country, wind, temp, setWind, setTemp, wImg, setWImg, last, setLast}) => {

  useEffect(()=> {
    setLast(country)

    if(last.length == 0 || last.name.common != country.name.common){
      weatherService
        .forecast(country.capitalInfo.latlng)
        .then(response =>{
          setTemp(response.data.main.temp)
          setWind(response.data.wind.speed)
          setWImg(`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
        })
        .catch(()=>{
          console.log("Error connecting to weather server")
        })
    }
  }, [])
    
  return(
    <>
      <h1>{country.name.common} </h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h3>languages</h3>
      <ul>
        {Object.entries(country.languages)
          .map(([key, value]) => 
            <li key={key}>{value}</li>
          ) 
        }
      </ul>
      <img src={country.flags.png}/>
      <h2>Weather in {country.capital}</h2>
      <p>temperature {temp}°C</p>
      <img src={wImg}/>
      <p>wind {wind}m/s</p>
    </>
  )
}
export default OneCountry