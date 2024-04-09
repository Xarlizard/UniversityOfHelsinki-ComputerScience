import { useState, useEffect } from 'react'
import countryServcice from './services/countries'
import Search from './components/Search'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')

  useEffect(() => {
    countryServcice
    .getAll()
    .then(response => {
      setCountries(response.data)
    })
  }, [])

  const handleSearchCountry = (event) => {
    setSearchCountry(event.target.value)
  }
  
  return (
    <>
      <Search value={searchCountry} onChange={handleSearchCountry} />
      <Countries countries={countries} searchCountry={searchCountry} />
    </>
  )
}

export default App