import { useState, useEffect } from 'react'
import countryServcice from './services/countries'
import Search from './components/Search'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])          //All countries array fetched at render.
  const [searchCountry, setSearchCountry] = useState('')  //NavBar input value.
  const [filtered, setFiltered] = useState(null)          //Filtered countries array passed down to components. Changes constantly base on NavBar input value.
  const [wind, setWind] = useState("0")   //"Selected country" components are rendered inside App so whenever
  const [temp, setTemp] = useState('0')   //the same country (last) as the one before gets chosen, it's state remains
  const [wImg, setWImg] = useState('')    //the same, so there's no need to fetch again with openWeather's API.
  const [last, setLast] = useState([])

  useEffect(() => {
    countryServcice
      .getAll()
      .then(response => {
        setCountries(response.data)
        setFiltered(response.data)
      })
      
  }, [])
  
  const handleSearchCountry = (event) => {
    event.preventDefault()
    setSearchCountry(event.target.value)
    setFiltered(countries.filter(country => 
        country.name.common.toLowerCase().includes(event.target.value.toLowerCase())
    ))
  }

  const setToFiltered = country => {setFiltered([country])} //function called from any country's "show" button

  if(filtered != null){
    return (
      <>
        <Search 
          searchCountry={searchCountry} 
          handleSearchCountry={handleSearchCountry}
        />
        <Countries 
          filtered={filtered} 
          searchCountry={searchCountry} 
          setToFiltered={setToFiltered} 
          last={last} setLast={setLast} 
          wind={wind} setWind={setWind}
          temp={temp} setTemp={setTemp}
          wImg={wImg} setWImg={setWImg}
        />
      </>
    )
  }
}

export default App