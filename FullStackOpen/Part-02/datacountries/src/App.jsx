import { useState, useEffect } from 'react'
import countryServcice from './services/countries'
import Search from './components/Search'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  const [filtered, setFiltered] = useState(null)

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

  if(filtered != null){
    return (
      <>
        <Search searchCountry={searchCountry} handleSearchCountry={handleSearchCountry}/>
        <Countries filtered={filtered} searchCountry={searchCountry} />
      </>
    )
  }
}

export default App